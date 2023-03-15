import React from 'react';
import LogsForm from './components/LogsForm';
import LogsTable from './components/LogsTable';
import { fetchLogs } from 'Redux/logs/logsSlice';
import { useDispatch, useSelector } from 'react-redux';

const LogsPage = () => {

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(fetchLogs(values))
    }

    const logsSlice = useSelector(state => state.logs)

    const {logs} = logsSlice;

    return (
        <React.Fragment>
            <LogsForm onSubmit={onSubmit}/>
            <LogsTable logs={logs} />
        </React.Fragment>
    )
}

export default LogsPage;