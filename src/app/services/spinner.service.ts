import { Injectable } from "@angular/core";
import { Overlay } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { MatSpinner } from "@angular/material";

@Injectable({
  providedIn: "root",
})
export class SpinnerService {
  constructor(private overlay: Overlay) {}

  private spinnerTopRef = this.cdkSpinnerCreate();

  private cdkSpinnerCreate() {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: "dark-backdrop",
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
  }

  public start() {
    if (!this.spinnerTopRef.hasAttached()) {
      this.spinnerTopRef.attach(new ComponentPortal(MatSpinner));
      return true;
    }
  }

  public stop() {
    if (this.spinnerTopRef.hasAttached()) {
      this.spinnerTopRef.detach();
      return false;
    }
  }
}
