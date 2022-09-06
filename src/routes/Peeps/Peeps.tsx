import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { loadPeeps } from "../../store/peeps/Peeps.actions";
import { RootState } from "../../app/rootReducer";

const Peeps: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    let peeps = useSelector((state: RootState) => state.peeps);

    useEffect(() => {
        async function load() {
            await dispatch(loadPeeps());
        }
        load();
        console.log(peeps)
    }, [dispatch]);

    return (
        <div>
            Peeps
            {peeps.map(peep => peep.body)}
        </div>
    )
}

export default Peeps;