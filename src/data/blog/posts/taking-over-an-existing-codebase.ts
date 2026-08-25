import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "taking-over-an-existing-codebase",
  title: "Developer Disappeared Mid-Project? Recover Your MVP",
  seoTitle: "Developer Disappeared? Recover Your MVP Codebase",
  description:
    "Secure access, rotate credentials, assess the codebase and decide whether to repair or rebuild after a developer disappears mid-project.",
  excerpt:
    "A recovery checklist for founders who have lost contact with a developer: secure the business assets, preserve what exists and audit the product before accepting a rebuild quote.",
  category: "Legacy Modernisation",
  primaryKeyword: "developer disappeared mid project",
  secondaryKeywords: [
    "freelancer disappeared with source code",
    "recover abandoned software project",
    "MVP codebase recovery",
    "taking over an existing codebase",
  ],
  published: "2026-08-13",
  updated: "2026-08-25",
  authorId: "leadership-02",
  serviceSlug: "technical-consulting",
  keyTakeaway:
    "When a developer disappears mid-project, treat it as an asset-control and continuity problem before treating it as a delivery delay. Secure company accounts, preserve the repository and production data, remove unneeded access, and rotate any credentials the former contributor may know. Then ask an independent engineer to reproduce the build and deployment before deciding whether to repair, replace parts, or rebuild.",
  sections: [
    {
      heading: "What should you do when a developer disappears mid-project?",
      blocks: [
        {
          type: "p",
          text: "Start by recording which company assets you can control today. Preserve repository history, production data, deployment settings and account records before making unreviewed changes. Removing a collaborator does not invalidate passwords or API keys they may already know, so revoke access and rotate exposed credentials as separate steps. Product work comes after control: a recovery assessment should prove that the system can be built, deployed and restored before anyone recommends a rewrite.",
        },
        {
          type: "callout",
          text: "Secure the business assets first. Diagnose the software second. Choose a recovery path third.",
        },
      ],
    },
    {
      heading: "Which assets must you secure before changing anything?",
      blocks: [
        {
          type: "p",
          text: "Create a written inventory with the owner, recovery email, billing contact and current administrators for every service. Do not assume that access to the live website also means you own its code, domain, data or deployment account.",
        },
        {
          type: "table",
          caption: "MVP recovery inventory",
          head: ["Asset", "What to confirm", "What to preserve"],
          rows: [
            ["Business identity", "Company email and identity-provider administrators", "User list, recovery methods and audit records"],
            ["Source repository", "Organisation ownership, administrators and every active branch", "Full history, releases, issues and pull requests"],
            ["Hosting and deployment", "Project owner, billing account and production domains", "Build settings, deployment history and environment names"],
            ["Domain and DNS", "Registrar owner, renewal method and DNS provider", "Current DNS records and verification records"],
            ["Database and storage", "Administrative access, region and retention settings", "A restorable backup or export made before intervention"],
            ["Payments, email and authentication", "Company-controlled owners and recovery contacts", "Provider configuration, webhooks and authorised users"],
            ["Mobile distribution", "Apple and Google organisation ownership where applicable", "Signing assets, package identifiers and release records"],
            ["Design and product records", "Workspace ownership and licences", "Current designs, requirements, decisions and known issues"],
          ],
        },
      ],
    },
    {
      heading: "How should access and credentials be changed safely?",
      blocks: [
        {
          type: "p",
          text: "Take snapshots or exports before removing access so the recovery team can distinguish an existing fault from a change made during containment. Then remove accounts that no longer need access, rotate passwords, deployment tokens, database credentials, API keys and signing secrets that may have been shared, and update the services that consume them.",
        },
        {
          type: "p",
          text: "OWASP treats secret revocation and rotation as separate lifecycle actions. GitHub also warns that removing an outside collaborator does not remove any local clone they already hold. This is why deleting a user is necessary but insufficient: known credentials must be invalidated, and future access should use individual identities with the least privilege required.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Record the current administrators, integrations and production state.",
            "Create and test a data backup or export where the provider supports it.",
            "Remove access that is no longer authorised without deleting shared business assets.",
            "Rotate credentials that may have been exposed and update their consumers.",
            "Review audit logs and recent changes for anything that needs investigation.",
            "Store replacement secrets in a designated secrets manager rather than source files or chat messages.",
          ],
        },
      ],
    },
    {
      heading: "Can the source code and live product be recovered?",
      blocks: [
        {
          type: "p",
          text: "Recovery depends on what the company controls and what the provider permits. GitHub requires administrative access to transfer a repository, and the receiving owner may need to accept it. Vercel documents team-to-team project transfers and a DNS-verification process for claiming a domain connected to an inaccessible account, but those routes have platform-specific requirements and do not guarantee recovery of every asset.",
        },
        {
          type: "table",
          caption: "What each recovery starting point can support",
          head: ["Starting point", "What may be recoverable", "Important limit"],
          rows: [
            ["Company-owned repository", "Full code history, branches and repository records", "Hosting, secrets and data may still be owned elsewhere"],
            ["Contractor-owned repository with an available administrator", "A documented transfer may preserve repository records", "The current administrator must have permission to transfer it"],
            ["A local archive or zip", "A code snapshot can be assessed and placed in a new repository", "Commit history, branches and some build context are missing"],
            ["A running deployment only", "Configuration and public behaviour can inform an assessment", "A deployment is not automatically a recoverable source repository"],
            ["No source and disputed ownership", "Company-owned data and accounts can still be inventoried", "Preserve contracts and records, and seek qualified legal advice"],
          ],
        },
      ],
    },
    {
      heading: "What should an independent recovery audit prove?",
      blocks: [
        {
          type: "p",
          text: "A useful audit produces evidence another team can act on. It should not begin with a preferred framework or a rewrite proposal. It should establish whether the current artefacts form a reproducible, supportable system and identify the smallest safe decision that follows.",
        },
        {
          type: "list",
          items: [
            "The repository can be checked out and built in a clean environment.",
            "The deployed application can be mapped to a specific revision and configuration.",
            "Production data has an understood backup and restoration path.",
            "Dependencies, licences and supported runtime versions are recorded.",
            "Repository history and deployment configuration have been checked for exposed secrets.",
            "The critical user workflow can be exercised and its failures observed.",
            "Tests, monitoring and known gaps are separated from assumptions.",
            "The recommendation explains what to retain, repair, replace or rebuild, with the evidence for each choice.",
          ],
        },
      ],
    },
    {
      heading: "When should you repair, replace or rebuild the MVP?",
      blocks: [
        {
          type: "p",
          text: "Choose after the audit, not during the first anxious conversation. A difficult codebase can still contain working business rules and data that are expensive to recreate. Equally, a clean-looking repository is not useful if nobody can deploy it, restore its data or support its dependencies.",
        },
        {
          type: "table",
          caption: "Evidence for the recovery decision",
          head: ["Decision", "Evidence that supports it", "First practical move"],
          rows: [
            ["Repair the current system", "It builds and deploys; critical flows work; faults are bounded", "Protect the affected area with tests, then fix the documented fault"],
            ["Replace one component", "A specific dependency or service is unsupported or blocks delivery", "Define its interface and migrate that boundary without replacing unrelated parts"],
            ["Rebuild in stages", "The existing system must stay available while high-risk parts change", "Move one verified workflow at a time and keep rollback possible"],
            ["Rebuild the first release", "Usable source is absent, ownership permits a new build, and the required workflow is tightly defined", "Preserve data and requirements, then scope one testable release rather than recreating every screen"],
          ],
        },
      ],
    },
    {
      heading: "How do you prevent one developer becoming a single point of failure?",
      blocks: [
        {
          type: "p",
          text: "Put business-critical services in company-owned organisations and use role-based access for employees and contractors. GitHub recommends maintaining at least two organisation owners so an unreachable owner does not make projects inaccessible. AWS guidance likewise favours temporary credentials, multi-factor authentication and least-privilege permissions over shared long-term credentials.",
        },
        {
          type: "list",
          items: [
            "Use a company-controlled email address, billing method and recovery contact for every critical service.",
            "Maintain at least two trusted organisation owners where the platform permits it.",
            "Give each contributor an individual account and only the permissions their work requires.",
            "Document how to build, deploy, roll back and restore the product from a backup.",
            "Keep an inventory of domains, repositories, cloud projects, data stores and third-party providers.",
            "Review access when roles change and before a contract ends.",
          ],
        },
      ],
    },
    {
      heading: "How can ApexStack scope the first recovery step?",
      blocks: [
        {
          type: "p",
          text: "A Product Blueprint starts from US$1,000 and can define the asset inventory, technical risks and evidence needed for a repair-or-rebuild decision. It is a bounded planning and de-risking engagement, not a promise to recover or rebuild a production application for that price.",
        },
        {
          type: "p",
          text: "A Launch Sprint starts from US$2,500 and covers planning, UX direction, implementation, testing and deployment for one tightly scoped first release or core workflow. Authentication, billing, mobile applications, advanced AI, multiple integrations, data migration, compliance and extensive administration can increase the quote. The written scope identifies what can be recovered, what must change and what remains outside the first engagement.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is the first step when a developer disappears mid-project?",
      answer:
        "Record and secure the company-controlled accounts, repository, domain, deployment, data stores and third-party services before changing the product. Preserve current artefacts and backups, remove access that is no longer authorised, and rotate credentials the former contributor may know. Only then commission a technical assessment.",
    },
    {
      question: "Can GitHub recover or transfer a contractor-owned repository?",
      answer:
        "GitHub documents repository transfers for administrators, and the receiving owner may need to accept the transfer. That does not guarantee a transfer from an inaccessible or disputed contractor account. Preserve contracts and payment records, use the provider's documented support route, and seek qualified legal advice when ownership is disputed.",
    },
    {
      question: "Should we rotate credentials after removing the former developer?",
      answer:
        "Yes, when the former developer may know or retain them. Removing a user does not invalidate copied passwords, API keys, database credentials or deployment tokens. Revoke and replace exposed credentials, update the services that consume them, and store the replacements in a designated secrets manager.",
    },
    {
      question: "How do we decide whether to repair or rebuild an abandoned MVP?",
      answer:
        "First test whether the available source can build in a clean environment, map it to production, restore its data, support its dependencies and run the critical workflow. Repair bounded faults, replace isolated blockers and reserve a rebuild for evidence that the current artefacts cannot support the agreed release safely.",
    },
    {
      question: "How can a founder prevent the same handover problem?",
      answer:
        "Keep critical services in company-owned organisations, maintain more than one trusted owner where supported, use individual least-privilege accounts, and document the build, deployment, rollback and restoration paths. Review access before contracts end and keep a current inventory of every operational dependency.",
    },
  ],
  sources: [
    {
      title: "Computer Security Incident Handling Guide, Revision 3",
      url: "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
      publisher: "NIST",
    },
    {
      title: "Secrets Management Cheat Sheet",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
      publisher: "OWASP",
    },
    {
      title: "Transferring a repository",
      url: "https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository",
      publisher: "GitHub Docs",
    },
    {
      title: "Removing an outside collaborator from an organisation repository",
      url: "https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/removing-an-outside-collaborator-from-an-organization-repository",
      publisher: "GitHub Docs",
    },
    {
      title: "Maintaining ownership continuity for your organisation",
      url: "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization",
      publisher: "GitHub Docs",
    },
    {
      title: "Transferring projects",
      url: "https://vercel.com/docs/projects/transferring-projects",
      publisher: "Vercel Docs",
    },
    {
      title: "Claim domain ownership",
      url: "https://vercel.com/docs/domains/working-with-domains/claim-domain-ownership",
      publisher: "Vercel Docs",
    },
    {
      title: "Security best practices in IAM",
      url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
      publisher: "Amazon Web Services",
    },
  ],
};
