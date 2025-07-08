import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  currentUser = "AR";

  menuItems = [
    { name: "Dashboard", active: true, icon: "📊", route: "/" },
    { name: "Accounts", active: false, icon: "👥", route: "/accounts" },
    { name: "Brokers", active: false, icon: "🏢", route: "/brokers" },
    { name: "Submissions", active: false, icon: "📋", route: "/submissions" },
    {
      name: "Organizations",
      active: false,
      icon: "🏛️",
      route: "/organizations",
    },
    { name: "Goals & Rules", active: false, icon: "🎯", route: "/goals-rules" },
    { name: "Admin", active: false, icon: "⚙️", route: "/admin" },
  ];
}
