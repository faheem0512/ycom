import React from "react";
import { renderWithRouterMatch } from "../../../utility/test-utils";
import Dashboard from "../index";
import {successData} from "../mockData";




describe('Dashboard',()=>{

    it("render  dashboard", () => {
        const { container  } = renderWithRouterMatch(Dashboard);
        process.nextTick(() => expect(container).toMatchSnapshot());
    });

    it("fetchData with success", () => {
        const { getAllByTestId  } = renderWithRouterMatch(Dashboard);
        let localMockFetch = mockFetch(successData);
        expect(fetch).toHaveBeenCalledTimes(0);
        process.nextTick(() => {
            // expect(getAllByTestId("dashboard")[1]).toHaveTextContent(/Microsoft Launches/);
            localMockFetch.mockClear();
        });
    });


});


const mockFetch = (data, isReject) => {
    /*
        There is a known compatibility issue with React DOM 16.8 where you will see the following warning:
        Warning: An update to ComponentName inside a test was not wrapped in act(...)
      * */
    // @ts-ignore
    return jest.spyOn(window, "fetch").mockImplementation(() => {
        if (isReject) {
            return Promise.resolve({
                json: () => Promise.reject(data),
                statusText: "Error"
            });
        }
        return Promise.resolve({
            json: () => Promise.resolve(data),
            ok: true
        });
    });
};
