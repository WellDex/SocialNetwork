import React, {Suspense} from "react";
import Preloader from "../components/common/preloader/preloader";

export const withSuspense = (Component) => {

    return (props) => (
        <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    );
};