import React, { useEffect, useState } from "react";
// import Nav from "../Nav";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Dashboard from "./routes/Dashboard";
// import Header from "../Header";
// import getDarkClass from "../../utils/getDarkClass";
import url from "../../api/urls";
import { GET } from "../../api/methods";
import { toast } from "react-toastify";
// import Loader from "../Loader";
// import AdminContext from "../../contexts/AdminContext";
// import Agents from "./routes/Agents";
// import States from "./routes/States";
// import Regions from "./routes/Regions";
// import Markets from "./routes/Markets";
// import Commodities from "./routes/Commodities";
// import Quantities from "./routes/Quantities";
// import LocalGovs from "./routes/LocalGov";
// import Categories from "./routes/Categories";
// import Admins from "./routes/Admins";
// import decodeJWT from "../../utils/decodeJWT";
import Submissions from "./routes/Submissions";

function Home(props) {
  const [loading, setLoading] = useState();
  const [registeredStatesList, setRegistredStates] = useState([]);
  const [registeredAgents, setAgents] = useState([]);
  const [registeredLocalGovs, setLocalGovs] = useState([]);
  const [registeredMarkets, setMarkets] = useState([]);
  const [registeredRegions, setRegions] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [commoditiesList, setCommodities] = useState([]);

  useEffect(() => {
    // const token = decodeJWT();
    // if(!token.succes) window.location = '/'
  }, []);

  const loadStates = async (q = false) => {
    if (!q) {
      setLoading(true);
    }
    const statesList = await GET(url.states);
    if (statesList.ok) {
      setRegistredStates(statesList.response.data);
    } else {
      toast.error("An error occured");
    }
    if (!q) {
      setLoading(false);
    }
  };
  const loadAgents = async (q = false) => {
    if (!q) {
      setLoading(true);
    }
    const agentsList = await GET(url.agents.base);
    if (agentsList.ok) {
      setAgents(agentsList.response.data);
    } else {
      toast.error("An error occured");
    }
    if (!q) {
      setLoading(false);
    }
  };
  const loadMarkets = async (q = false) => {
    if (!q) {
      setLoading(true);
    }
    const marketList = await GET(url.market);
    if (marketList.ok) {
      setMarkets(marketList.response.data);
    } else {
      toast.error("An error occured");
    }
    if (!q) {
      setLoading(false);
    }
  };
  const loadRegions = async (q = false) => {
    if (!q) {
      setLoading(true);
    }
    const regionList = await GET(url.region);
    if (regionList.ok) {
      setRegions(regionList.response.data);
    } else {
      toast.error("An error occured");
    }
    if (!q) {
      setLoading(false);
    }
  };
  const loadCommodities = async (q = false) => {
    if (!q) {
      setLoading(true);
    }
    const commoditiesList = await GET(url.commodities);
    if (commoditiesList.ok) {
      setCommodities(commoditiesList.response.data);
    } else {
      toast.error("An error occured");
    }
    if (!q) {
      setLoading(false);
    }
  };
  const loadLocalGovs = async (q = false) => {
    if (!q) {
      setLoading(true);
    }
    const lgList = await GET(url.localGov);
    if (lgList.ok) {
      setLocalGovs(lgList.response.data);
    } else {
      toast.error("An error occured");
    }
    if (!q) {
      setLoading(false);
    }
  };
  const loadQuantities = async (q = false) => {
    if (!q) {
      setLoading(true);
    }
    const QuantityList = await GET(url.quantities);
    if (QuantityList.ok) {
      setQuantities(QuantityList.response.data);
    } else {
      toast.error("An error occured");
    }
    if (!q) {
      setLoading(false);
    }
  };
  const loadCategories = async (q = false) => {
    if (!q) {
      setLoading(true);
    }
    const categoryList = await GET(url.categories);
    if (categoryList.ok) {
      setCategories(categoryList.response.data);
    } else {
      toast.error("An error occured");
    }
    if (!q) {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    loadStates(true);
    loadLocalGovs(true);
    loadAgents(true);
    loadRegions(true);
    loadMarkets(true);
    loadCommodities(true);
    loadQuantities(true);
    loadCategories(true);
    setLoading(false);
  }, []);
  return <h2>Cool</h2>;
  // return (
  //   <AdminContext.Provider
  //     value={{
  //       categories,
  //       loadCategories,
  //       commoditiesList,
  //       quantities,
  //       loadQuantities,
  //       loadCommodities,
  //       registeredStatesList,
  //       registeredRegions,
  //       loadRegions,
  //       registeredMarkets,
  //       loadMarkets,
  //       loadStates,
  //       registeredLocalGovs,
  //       loadLocalGovs,
  //       registeredAgents,
  //       loadAgents,
  //     }}
  //   >
  //     <BrowserRouter>
  //       <div
  //         className={`container bg-light-gray flex p-10 ${getDarkClass(
  //           "bg-dark"
  //         )}`}
  //       >
  //         <Nav />
  //         <div className="router_body">
  //           <Header />
  //           <div className="routes">
  //             {loading ? (
  //               <Loader loading />
  //             ) : (
  //               <Switch>
  //                 {/* <Route path={url.agents.base} component={Agents} />
  //                 <Route path={url.states} component={States} />
  //                 <Route path={url.region} component={Regions} />
  //                 <Route path={url.market} component={Markets} />
  //                 <Route path={url.commodities} component={Commodities} />
  //                 <Route path={url.localGov} component={LocalGovs} />
  //                 <Route path={url.quantities} component={Quantities} />
  //                 <Route path={url.categories} component={Categories} />
  //                 <Route path={url.admins} component={Admins} /> */}
  //                 <Route
  //                   path={url.agents.submissions.base}
  //                   component={Submissions}
  //                 />
  //                 <Route exact path="/" component={Dashboard} />
  //               </Switch>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </BrowserRouter>
  //   </AdminContext.Provider>
  // );
}

export default Home;
