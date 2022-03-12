import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-controller",
  templateUrl: "./game-controller.component.html",
  styleUrls: ["./game-controller.component.css"],
})
export class GameControllerComponent implements OnInit {
  @Output() intervelFired = new EventEmitter<number>();
  intervel;
  lastNumber = 0;

  constructor() {}

  ngOnInit(): void {}

  gameStart() {
    this.intervel = setInterval(() => {
      this.intervelFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
  gameStop() {
    clearInterval(this.intervel);
    this.lastNumber=0;
  }
}
