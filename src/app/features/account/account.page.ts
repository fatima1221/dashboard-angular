import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-account",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
})
export class AccountPage implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get account ID from route if needed
  }

  accountInfo = {
    name: "Maritime Logistics Corp",
    address: "456 Harbor Boulevard, Suite 500",
    city: "Seattle, WA 98101",
    accountNumber: "ACC-001",
    underwriter: "Kate Johansen",
  };

  alerts = [
    { type: "info", message: "Needs Attention" },
    { type: "success", message: "Loss Control Complete" },
    { type: "info", message: "Claims Review Required" },
  ];

  performanceMetrics = {
    winnability: { value: "Very Strong", rating: 5 },
    lossRatio: { value: "26%", target: "26% of target", rating: 4 },
    premiumGrowth: {
      value: "12.4%",
      growth: "6% increase $120M vs $114M target",
      rating: 3,
    },
    exposureDistribution: {
      marineCargo: 71.4,
      generalLiability: 20.5,
      workersComp: 8.6,
    },
  };

  policies = [
    {
      type: "Marine Cargo",
      status: "Effective",
      effectiveDate: "01/01/2024",
      color: "#10b981",
    },
    {
      type: "General Liability",
      status: "Pending",
      effectiveDate: "12/01/2024",
      color: "#f59e0b",
    },
    {
      type: "Workers Comp",
      status: "Active",
      effectiveDate: "06/01/2024",
      color: "#3b82f6",
    },
    {
      type: "Property",
      status: "Pending",
      effectiveDate: "02/15/2024",
      color: "#f59e0b",
    },
    {
      type: "Umbrella",
      status: "Expired",
      effectiveDate: "11/01/2024",
      color: "#ef4444",
    },
  ];

  accountStatus = [
    { status: "Submitted", completed: true },
    { status: "Review", completed: true },
    { status: "Quote", completed: true },
    { status: "Bind", completed: true },
    { status: "Issue", completed: false },
    { status: "Renew", completed: false },
  ];

  complianceItems = [
    { item: "KYC verification", completed: true },
    { item: "Required Documentation", completed: true },
    { item: "Regulatory approval", completed: true },
    { item: "Financial verification", completed: true },
  ];

  winnabilityData = {
    overallScore: 82,
    historicalTrend: [75, 78, 80, 82],
    position: {
      yourScore: 82,
      marketAvg: 68,
      topCompetition: 86,
    },
    increasingFactors: [
      { factor: "Broker relationship", impact: "+24%" },
      { factor: "Loss history", impact: "+22%" },
      { factor: "Industry growth", impact: "+18%" },
      { factor: "Maritime opportunity", impact: "+16%" },
    ],
    decreasingFactors: [
      { factor: "Premium pricing", impact: "-24%" },
      { factor: "Total exposure", impact: "-20%" },
      { factor: "Loss ratio trend", impact: "-18%" },
      { factor: "Market competition", impact: "-15%" },
    ],
  };

  recommendations = [
    {
      title: "Offer 5% premium discount in exchange for 5 year commitment",
      description:
        "Historical loss frequency 30% vs minimum year commitment. Brokerage pricing is 15% above market, however renewal opportunities significantly offset risk exposure",
      type: "primary",
    },
    {
      title: "Propose risk control services for cargo handling procedures",
      description:
        "Risk assessment indicates coverage for cargo handling operations should address the most frequent claim scenarios",
      type: "secondary",
    },
  ];

  communications = [
    {
      type: "Policy Renewal",
      subject: "Auto Insurance 5/15/25",
      from: "Matthew Wilson",
      timestamp: "3 hours ago",
      status: "New",
      hasAttachments: true,
    },
    {
      type: "New Quote Request",
      subject: "Workers Comp Insurance",
      from: "Hi Arthur, Real Estate Group expressed interests in adding workers compensation coverage for their insurance portfolio. We completed the underwriting assessment based on",
      timestamp: "5 hours ago",
      status: "Responded",
      hasAttachments: true,
    },
  ];

  policiesTable = [
    {
      effective: "01/01/2025",
      expiration: "01/01/2026",
      status: "Active",
      premium: "$597,900",
      commission: "$596,000",
      renewal: "$810,000",
      annualTech: "$20,000",
      underwritingMargin: "$263,000",
      performance: "3.3%",
      trend: "up",
    },
    {
      effective: "01/01/2025",
      expiration: "01/01/2026",
      status: "Active",
      premium: "$50,000",
      commission: "$165,000",
      renewal: "$70,000",
      annualTech: "$72,500",
      underwritingMargin: "$75,000",
      performance: "4.1%",
      trend: "down",
    },
    {
      effective: "Pending",
      expiration: "Pending",
      status: "Pending",
      premium: "$0",
      commission: "$0",
      renewal: "$73,500",
      annualTech: "$79,000",
      underwritingMargin: "$75,000",
      performance: "N/A",
      trend: "none",
    },
    {
      effective: "01/01/2025",
      expiration: "01/01/2026",
      status: "Active",
      premium: "$245,000",
      commission: "$250,000",
      renewal: "$267,900",
      annualTech: "$278,000",
      underwritingMargin: "$294,000",
      performance: "10.1%",
      trend: "up",
    },
  ];
}
