import { defineStore } from "pinia";
import ModalConfirmation from "@/components/ModalConfirmation.vue";
import type { VueElement } from "vue";

export interface INotification {
  type: string;
  title: string;
  description: string;
  id: number;
  timer?: ReturnType<typeof setTimeout>;
}

interface IUiStore {
  overlay: boolean;
  overlayComponent?: VueElement;
  confirmationTitle: string;
  confirmationDescription: string;
  confirmationHandler?: Function;
  confirmButtonText?: string;
  notifications: INotification[];
}

export const useUi = defineStore("ui", {
  state(): IUiStore {
    return {
      overlay: false,
      overlayComponent: undefined,
      confirmationTitle: "",
      confirmationDescription: "",
      confirmButtonText: "",
      notifications: [],
    };
  },
  actions: {
    setConfirmation({
      title,
      description,
      handler,
      confirmButtonText,
    }: {
      title: string;
      description: string;
      handler?: Function;
      confirmButtonText?: string;
    }) {
      this.overlay = true;
      this.overlayComponent = ModalConfirmation;
      this.confirmationTitle = title;
      this.confirmationDescription = description;
      this.confirmationHandler = handler;
      this.confirmButtonText = confirmButtonText;
    },
    closeConfirmation() {
      this.hideOverlay();
    },
    hideOverlay() {
      this.overlay = false;
      this.overlayComponent = undefined;
      this.confirmationTitle = "";
      this.confirmationDescription = "";
      this.confirmationHandler = undefined;
    },
    addSuccessNotification({
      title,
      description,
    }: {
      title: string;
      description: string;
    }) {
      this.addNotification({
        title,
        description,
        type: "success",
        id: Math.random(),
      });
    },
    addWarningNotification({
      title,
      description,
    }: {
      title: string;
      description: string;
    }) {
      this.addNotification({
        title,
        description,
        type: "warning",
        id: Math.random(),
      });
    },
    addNotification(notification: INotification) {
      this.notifications.push(notification);
      const timer = setTimeout(() => {
        this.deleteNotification(notification);
      }, 5000);
      notification.timer = timer;
    },
    deleteNotification(notification: INotification) {
      const index = this.notifications.indexOf(notification);
      if (notification.timer) {
        clearTimeout(notification.timer);
      }
      if (index > -1) {
        this.notifications.splice(index, 1);
      }
    },
  },
});
