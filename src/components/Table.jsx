import MaterialTable from 'material-table'
import * as React from 'react'

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import ViewColumn from '@material-ui/icons/ViewColumn';
import AppContext from '../contexts/AppContext';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} color="secondary" ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} color="action" ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    ViewItem: forwardRef((props, ref) => <VisibilityRoundedIcon {...props} color="action" ref={ref} />)
  };


function Table({ title, data, column, deleteItem = () => {}, editItem = () => {}, viewItem = false}) {
    const { theme } = React.useContext(AppContext)
  return (
      <MaterialTable
        icons={tableIcons}
        style={{ backgroundColor: theme === 'light' ? '#fff' : '#15314b', color: theme === 'light' ? '#021a31': '#fff' , }}
        actions={[
            viewItem && {
            icon: tableIcons.ViewItem,
            tooltip: 'View',
            onClick: viewItem,
            },
            {
            icon: tableIcons.Edit,
            tooltip: 'Edit',
            onClick: editItem
            },
            {
            icon: tableIcons.Delete,
            tooltip: 'Delete',
            onClick: deleteItem
            },
        ]}
        title={title}
        columns={column}
        data={data}        
        options={{
            exportButton: true,
            sorting: true
        }}
    />
  )
}

export default Table