import MaterialTable from "material-table";
import * as React from "react";

import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import ViewColumn from "@material-ui/icons/ViewColumn";
import MapIcon from "@material-ui/icons/Map";
import AppContext from "../contexts/AppContext";

function Table({
  title,
  options = [],
  data,
  column,
  deleteItem = () => {},
  editItem = () => {},
}) {
  const { theme } = React.useContext(AppContext);
  const tableIcons = {
    Add: forwardRef((props, ref) => (
      <AddBox
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    Check: forwardRef((props, ref) => (
      <Check
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    Clear: forwardRef((props, ref) => (
      <Clear
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    Delete: forwardRef((props, ref) => (
      <DeleteOutline {...props} color="secondary" ref={ref} />
    )),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    Edit: forwardRef((props, ref) => (
      <Edit
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    Export: forwardRef((props, ref) => (
      <SaveAlt
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    Filter: forwardRef((props, ref) => (
      <FilterList
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    FirstPage: forwardRef((props, ref) => (
      <FirstPage
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    LastPage: forwardRef((props, ref) => (
      <LastPage
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    NextPage: forwardRef((props, ref) => (
      <ChevronRight
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    ResetSearch: forwardRef((props, ref) => (
      <Clear
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    Search: forwardRef((props, ref) => (
      <Search
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    ViewColumn: forwardRef((props, ref) => (
      <ViewColumn
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    ViewItem: forwardRef((props, ref) => (
      <VisibilityRoundedIcon
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
    Map: forwardRef((props, ref) => (
      <MapIcon
        {...props}
        ref={ref}
        color={theme === "light" ? "action" : "primary"}
      />
    )),
  };
  return (
    <div className="table_cont">
      <MaterialTable
        icons={tableIcons}
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#15314b",
          color: theme === "light" ? "#021a31" : "#fff",
        }}
        actions={
          options.length > 0
            ? options.map((opt) => ({
                ...opt,
                icon: tableIcons[opt.icon],
              }))
            : [
                {
                  icon: tableIcons.Edit,
                  tooltip: "Edit",
                  onClick: editItem,
                },
                // {
                //   icon: tableIcons.Delete,
                //   tooltip: 'Delete',
                //   onClick: deleteItem
                // },
              ]
        }
        title={title}
        columns={column}
        data={data}
        options={{
          exportButton: true,
          sorting: true,
        }}
      />
    </div>
  );
}

export default Table;
