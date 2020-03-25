import React, {Suspense} from "react";
import Preloader from "../components/common/Preloader/preloader";

export const withSuspense = (Component) => {

    return (props) => (
        <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    );
};