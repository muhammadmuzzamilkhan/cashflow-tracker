import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget } = useContext(AppContext);

    return (
        <div className="btn-toolbar justify-content-between alert alert-secondary">
            <span>Total Budget: Rs.{budget}</span>
            <div>
                <button className="btn btn-primary">Edit</button>
            </div>
        </div>
    )
};

export default Budget;