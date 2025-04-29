import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-platform-credentials',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './platform-credentials.component.html',
  styleUrls: ['./platform-credentials.component.css']
})
export class PlatformCredentialsComponent {
  selectedPlatform: string = '';
  platformUsername: string = '';
  platformPassword: string = '';

  saveCredentials() {
    console.log('Saved Credentials:', {
      platform: this.selectedPlatform,
      username: this.platformUsername,
      password: this.platformPassword
    });

    // Clear fields after saving
    this.selectedPlatform = '';
    this.platformUsername = '';
    this.platformPassword = '';
  }
}
