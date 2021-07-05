const url = {
  login: "/admin/login",
  submissionsStat: "/submission/stat",
  agents: {
    base: "/agents",
    submissions: {
      base: "/submission",
      registerSubmissionAgent: "/submission/registerSubmissionAgent",
      getUnApprovedSubmisions: "/submission/getUnapprovedSubmissions",
      getRejectedSubmisions: "/submission/getRejectedSubmissions",
      approveSubmission: "/submission/approveSubmission/:_id",
      rejectSubmission: "/submission/rejectSubmission/:_id",
      getApprovedSubmisions: "/submission/approvedSubmission",
    },
  },
  region: "/region",
  states: "/states",
  commodities: "/commodities",
  market: "/market",
  localGov: "/localGov",
  quantities: "/quantities",
  categories: "/categories",
  admins: "/admin",
};

export default url;
