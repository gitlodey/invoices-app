import { defineStore } from "pinia";
import ModalConfirmation from "@/components/ModalConfirmation.vue";
import type { VueElement } from "vue";

interface IUiStore {
  overlay: boolean;
  overlayComponent?: VueElement;
  confirmationTitle: string;
  confirmationDescription: string;
  confirmationHandler?: Function;
  confirmButtonText?: string;
}

export const useUi = defineStore("ui", {
  state(): IUiStore {
    return {
      overlay: false,
      overlayComponent: undefined,
      confirmationTitle: "",
      confirmationDescription: "",
      confirmButtonText: "",
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
  },
});
