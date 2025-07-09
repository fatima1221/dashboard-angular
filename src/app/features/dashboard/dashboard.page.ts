import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  constructor(private router: Router) {}

  currentUser = 'Arthur';
  openTasks = 12;

  workQueueTabs = [
    { name: 'Assigned to me (12)', active: true },
    { name: 'Pending Review (6)', active: false },
    { name: 'Referrals (1)', active: false },
  ];

  workQueueItems = [
    {
      initials: 'SM',
      name: 'Sam Masters',
      company: "NAMA's Tech Solutions Data Process",
      type: 'Underwriter Referral',
      status: 'New',
      created: '04/16/2025',
      priority: 'high',
    },
    {
      initials: 'AW',
      name: 'Annmarie Willis',
      company: 'Maritime Logistics Corp USA Limited',
      type: 'Underwriter Referral',
      status: 'New',
      created: '04/20/2025',
      priority: 'medium',
    },
    {
      initials: 'DD',
      name: 'Darius Davenport',
      company: 'GreenField Energy Ltd Environmental Resource',
      type: 'Loss Control Request',
      status: 'New',
      created: '04/16/2025',
      priority: 'high',
    },
    {
      initials: 'AK',
      name: 'Ana Khan',
      company: 'NorthStar Financing Group Ltd.',
      type: 'Underwriter Referral',
      status: 'Pending Review',
      created: '04/22/2025',
      priority: 'low',
    },
    {
      initials: 'AK',
      name: 'Ana Khan',
      company: 'Allegra Healthcare Systems Medical Complex',
      type: 'Email',
      status: 'Completed',
      created: '04/21/2025',
      priority: 'medium',
    },
    {
      initials: 'MC',
      name: 'Me',
      company: 'Quantium Industries Project Liability',
      type: 'Email',
      status: 'Completed',
      created: '04/20/2025',
      priority: 'low',
    },
  ];

  portfolioGoals = {
    newBusiness: { target: 37, progress: 70 },
    renewal: { target: 67, progress: 45 },
    crossSell: { target: 34, progress: 80 },
  };

  quickActions = [
    'New Submission',
    'Quote Builder',
    'Risks Models',
    'Documents Upload',
  ];

  marketIntelligence = [
    {
      title: 'Florida Property Cyber market: -USD 5M loss',
      time: '2 hours ago',
    },
    {
      title: 'New reinsurance entering Marine market',
      time: '4 hours ago',
    },
    {
      title: 'Environmental regulatory changes in CA',
      time: '6 hours ago',
    },
  ];

  myAccounts = [
    {
      initials: 'NT',
      name: "NAMA's Tech Solutions",
      renewal: '04/16/2025',
      line: 'CEO Liability',
      underwriter: 'Willis Towers',
      listening: '$2.3M',
      appetite: 'HIGH',
      stage: 'BIND',
      triage: 'Active',
      vulnerability: 'Low',
      vulnerabilityLevel: 5,
    },
    {
      initials: 'AH',
      name: 'Allegra Healthcare Systems',
      renewal: '06/30/2025',
      line: 'Medical Malpractice',
      underwriter: 'Aon Risk',
      listening: '$1.7M',
      appetite: 'MEDIUM',
      stage: 'BIND',
      triage: 'VAND RENEW',
      vulnerability: 'Medium',
      vulnerabilityLevel: 3,
    },
    {
      initials: 'ML',
      name: 'Maritime Logistics Corp',
      renewal: '08/05/2025',
      line: 'Marine Cargo',
      underwriter: 'Marsh McLennan',
      listening: '$875K',
      appetite: 'HIGH',
      stage: 'BIND',
      triage: 'Active',
      vulnerability: 'Low',
      vulnerabilityLevel: 5,
    },
    {
      initials: 'GF',
      name: 'GreenField Energy Ltd',
      renewal: '07/23/2025',
      line: 'Environmental Liability',
      underwriter: 'Aon Risk',
      listening: '$1.2M',
      appetite: 'CRITICAL',
      stage: 'QUOTE',
      triage: 'VAND RENEW',
      vulnerability: 'High',
      vulnerabilityLevel: 2,
    },
  ];

  setActiveTab(selectedTab: any) {
    this.workQueueTabs.forEach((tab) => (tab.active = false));
    selectedTab.active = true;
    // In a real app, you'd filter the workQueueItems based on the selected tab
  }

  navigateToAccount(account: any) {
    this.router.navigate([
      '/account',
      account.name.toLowerCase().replace(/\s+/g, '-'),
    ]);
  }
}
