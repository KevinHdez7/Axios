/* eslint-disable react/display-name */

import link from 'next/link';
// eslint-disable-next-line import/no-anonymous-default-export
export default function (){
    return(
        <div>
            <h1>Product page</h1>
            <link href="/dashboard">Go to Dashboard</link>
        </div>
    );
}
