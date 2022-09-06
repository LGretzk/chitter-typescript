import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { loadPeeps } from "../../store/peeps/Peeps.actions";
import { peepSelector } from "../../store/peeps/Peeps.reducers";

function Peeps() {
    const dispatch: AppDispatch = useDispatch();
    let peeps = peepSelector;

    useEffect(() => {
        async function load() {
            await dispatch(loadPeeps());
        }
        load();
    }, [peeps, dispatch]);

    return (
        <div>
            {peeps.map(peep => peep.body)}
        </div>
    )
}