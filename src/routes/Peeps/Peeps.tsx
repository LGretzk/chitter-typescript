import React, { useEffect } from "react";
import { loadPeeps } from "../../store/peeps/Peeps.actions";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Peeps: React.FC = () => {
    const dispatch = useAppDispatch();
    // changes after adding the hooks.ts
    // const dispatch: AppDispatch = useDispatch();
    let peeps = useAppSelector(state => state.peeps);
    // let peeps = useSelector((state: RootState) => state.peeps);

    useEffect(() => {
        async function load() {
            await dispatch(loadPeeps());
        }
        load();
    }, [dispatch]);

    return (
        <div>
            Peeps
            {peeps.map(peep => peep.body)}
        </div>
    )
}

export default Peeps;