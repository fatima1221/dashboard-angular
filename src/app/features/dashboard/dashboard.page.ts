import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage {
  constructor(private router: Router) {}

  currentUser = "Arthur";
  openTasks = 12;

  workQueueTabs = [
    { name: "Assigned to me (12)", active: true },
    { name: "Pending Review (6)", active: false },
    { name: "Referrals (1)", active: false },
  ];

  workQueueItems = [
    {
      type: "SM",
      name: "Sam Masters",
      company: "NAMA's Tech Solutions Data Process",
      category: "Underwriter Referral",
      status: "New",
      created: "04/16/2025",
      priority: "high",
    },
    {
      type: "AW",
      name: "Annmarie Willis",
      company: "Maritime Logistics Corp USA Limited",
      category: "Underwriter Referral",
      status: "New",
      created: "04/20/2025",
      priority: "medium",
    },
    {
      type: "DD",
      name: "Darius Davenport",
      company: "GreenField Energy Ltd Environmental Resource",
      category: "Loss Control Request",
      status: "New",
      created: "04/16/2025",
      priority: "high",
    },
    {
      type: "AK",
      name: "Ana Khan",
      company: "NorthStar Financing Group Ltd.",
      category: "Underwriter Referral",
      status: "Pending Review",
      created: "04/22/2025",
      priority: "low",
    },
    {
      type: "AK",
      name: "Ana Khan",
      company: "Allegra Healthcare Systems Medical Complex",
      category: "Email",
      status: "Completed",
      created: "04/21/2025",
      priority: "medium",
    },
  ];

  portfolioGoals = {
    newBusiness: { current: 67, target: 100, color: "#10b981" },
    renewals: { current: 45, target: 100, color: "#f59e0b" },
    crossSell: { current: 23, target: 100, color: "#ef4444" },
  };

  quickActions = [
    "New Submission",
    "Quote Builder",
    "Risks Models",
    "Documents Upload",
  ];

  marketIntelligence = [
    {
      title: "Florida Property Cyber market: -USD 5M loss",
      time: "2 hours ago",
    },
    {
      title: "New reinsurance entering Marine market",
      time: "4 hours ago",
    },
    {
      title: "Environmental regulatory changes in CA",
      time: "6 hours ago",
    },
  ];

  myAccounts = [
    {
      type: "NT",
      name: "NAMA's Tech Solutions",
      line: "CEO Liability",
      underwriter: "Willis Towers",
      renewal: "04/16/2025",
      premium: "$2.3M",
      commission: "$2.8M",
      priority: "HIGH",
      status: "Active",
      stage: "BIND",
      vulnerability: "Low",
    },
    {
      type: "AH",
      name: "Allegra Healthcare Systems",
      line: "Medical Malpractice",
      underwriter: "Aon Risk",
      renewal: "06/30/2025",
      premium: "$1.7M",
      commission: "$1.5M",
      priority: "MEDIUM",
      status: "VAND RENEW",
      stage: "BIND",
      vulnerability: "Medium",
    },
    {
      type: "ML",
      name: "Maritime Logistics Corp",
      line: "Marine Cargo",
      underwriter: "Marsh McLennan",
      renewal: "08/05/2025",
      premium: "$875K",
      commission: "$950K",
      priority: "HIGH",
      status: "Active",
      stage: "BIND",
      vulnerability: "Low",
    },
    {
      type: "GF",
      name: "GreenField Energy Ltd",
      line: "Environmental Liability",
      underwriter: "Aon Risk",
      renewal: "07/23/2025",
      premium: "$1.2M",
      commission: "$1.4M",
      priority: "CRITICAL",
      status: "VAND RENEW",
      stage: "QUOTE",
      vulnerability: "High",
    },
  ];

  navigateToAccount(account: any) {
    this.router.navigate([
      "/account",
      account.name.toLowerCase().replace(/\s+/g, "-"),
    ]);
  }
}
