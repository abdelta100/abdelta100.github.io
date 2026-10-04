/* Add projects here. Keep cover paths inside assets/projects/<slug>/ and use null until an image is ready. */
window.PROJECTS = [
  {
    id: "stochastic-topology-reliability", featured: true,
    title: "Reliability constraints in stochastic topology optimization",
    type: "Research", categories: ["research"], year: "2025–2026",
    summary: "Adding reliability constraints to a stochastic topology optimization framework to control the chance of structural response exceeding defined limits.",
    details: "Integrated component outcrossing and first-passage failure constraints into a stochastic topology optimization framework. Developed system outcrossing expressions and implemented adjoint sensitivity formulations for nonlinear reliability constraints. The resulting designs controlled the probability of exceeding specified drift or displacement thresholds under stochastic base excitation.",
    contribution: "Research implementation and validation · MATLAB",
    tags: ["Reliability", "Topology optimization", "MATLAB", "Structural dynamics"],
    visual: "topology", visualLabel: "Reliability field", cover: null, coverAlt: ""
  },
  {
    id: "viscous-damper-placement", featured: true,
    title: "Optimizing viscous damper placement for an irregular tower",
    type: "Academic project", categories: ["academic", "computational-design"], year: "2024–2026",
    summary: "A MATLAB workflow for exploring damper layouts in an asymmetric L-shaped tower under lateral drift and rotation objectives.",
    details: "Developed a framework to optimize rotational performance of an asymmetric building under stochastic excitation, using damping coefficients as design variables. Compared individual, grouped, and floor-grouped damper configurations to explore performance and practical tradeoffs. Structural matrices were extracted from SAP2000, processed in MATLAB, and reduced with rigid-floor constraints before gradient-based optimization.",
    contribution: "Term project · Structural damping · SAP2000 and MATLAB",
    tags: ["Structural damping", "Optimization", "SAP2000", "MATLAB"],
    visual: "dampers", visualLabel: "Damper distribution study", cover: null, coverAlt: ""
  },
  {
    id: "lifecycle-cost-reliability", featured: true,
    title: "Life-cycle cost assessment in a reliability framework",
    type: "Academic project", categories: ["academic"], year: "2024–2026",
    summary: "Comparing pavement alternatives by treating life-cycle costs as uncertain and validating decisions with Monte Carlo analysis.",
    details: "Applied structural reliability methods (FORM and SORM) to compare design alternatives for a pavement project when costs are treated as random variables. Validated the results with Monte Carlo analysis and plotted how the preferred choice responds to cost variables and model parameters.",
    contribution: "Term project · Reliability analysis · MATLAB",
    tags: ["Life-cycle cost", "FORM / SORM", "Monte Carlo", "MATLAB"],
    visual: "lifecycle", visualLabel: "Life-cycle decision model", cover: null, coverAlt: ""
  },
  {
    id: "mashrabiya-facade", featured: true,
    title: "A parametrically explored Mashrabiya facade",
    type: "Personal project", categories: ["computational-design"], year: "Personal study",
    summary: "A Grasshopper algorithm inspired by the responsive facade of the Al Bahar Towers.",
    details: "Explored a Mashrabiya-inspired facade pattern through a parametric Grasshopper definition. The study uses the Al Bahar Towers as a reference and focuses on recreating the geometric logic in a flexible model.",
    contribution: "Personal computational design study · Grasshopper",
    tags: ["Grasshopper", "Parametric design", "Facade"],
    visual: "facade", visualLabel: "Parametric facade pattern", cover: null, coverAlt: ""
  },
  {
    id: "grasshopper-sap2000", featured: false,
    title: "From Grasshopper geometry to SAP2000",
    type: "Personal project", categories: ["computational-design"], year: "Personal study",
    summary: "Exploring a workflow to move parametric structural geometry into analysis software using BHoM.",
    details: "Used the Building and Habitats object Model (BHoM) to explore how parametric models can move between Grasshopper and SAP2000. A truss-supported roof is defined in Grasshopper from a profile curve, structured as elements, then exported for structural analysis and design.",
    contribution: "Personal workflow exploration · Grasshopper, BHoM, SAP2000",
    tags: ["BHoM", "Grasshopper", "SAP2000", "Interoperability"],
    visual: "workflow", visualLabel: "Geometry-to-analysis workflow", cover: null, coverAlt: ""
  }
];
