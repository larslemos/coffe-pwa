import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private snackBar: MatSnackBar) {

    }

    //When app is offline
    updateNetworkStatusUI() {
        if(navigator.onLine) {
            //You migh be online 
            (document.querySelector("body") as any).style = "";
        } else {
            //100% sure you are offline
            (document.querySelector("body") as any).style = "filter: grayscale(1)";
        }

    }


    ngOnInit() {
      this.updateNetworkStatusUI();
      window.addEventListener("online", this. updateNetworkStatusUI);
      window.addEventListener("offline", this. updateNetworkStatusUI);

      //to avoid Typescript errors
      if((navigator as any).standalone == false) {
        //for an iOS device and we are in the browser
        this.snackBar.open("You can add this PWA to the Home Screen", "", {duration: 3000});
      }

      if((navigator as any).standalone == undefined ) {
        //Its' not iOS
        if(window.matchMedia("display-mode: browser").matches) {
          //We are in the browser
          window.addEventListener("beforeinstallprompt", event => {
              event.preventDefault();
              const sb = this.snackBar.open("Do you want to install this App?", "Install",
              {duration: 5000});
              sb.onAction().subscribe( () => {
                  (event as any).prompt();
                  (event as any).userChoice.then( result => {
                      if(result.outcome == "dismissed") {
                        //TODO: Track no installation
                      } else {
                        //TODO: Track installation

                      }
                  });
              });
              return false;
          });
        }

      }

    }
}
