import React from "react";
import { renderWithRouterMatch,fireEvent } from "../../../utility/test-utils";
import Dashboard from "../index";
import {successData} from "../mockData";




describe('Dashboard',()=>{

    it("render  dashboard", () => {
        const { container  } = renderWithRouterMatch(Dashboard);
        process.nextTick(() => expect(container).toMatchSnapshot());
    });

    it("fetchData with success", () => {
        let localMockFetch = mockFetch(successData);
        const { getAllByTestId  } = renderWithRouterMatch(Dashboard);
        expect(fetch).toHaveBeenCalledTimes(1);
        process.nextTick(() => {
            expect(getAllByTestId("dashboard")[0]).toHaveTextContent(/Microsoft Launches/);
            localMockFetch.mockClear();
        });
    });

    it("fetchData with failure", () => {
        let localMockFetch = mockFetch("Some Error",true);
        const { getAllByTestId  } = renderWithRouterMatch(Dashboard);
        expect(fetch).toHaveBeenCalledTimes(1);
        process.nextTick(() => {
            expect(getAllByTestId("dashboard")[0]).toHaveTextContent(/Some Error/);
            localMockFetch.mockClear();
        });
    });

    it("testing upvote and hide functionlity", () => {
        let localMockFetch = mockFetch(successData);
        const { getAllByTestId  } = renderWithRouterMatch(Dashboard);
        process.nextTick(() => {
            expect(getAllByTestId("hide-button").length).toBe(20);
            fireEvent.click(getAllByTestId("hide-button")[0]);
            expect(getAllByTestId("hide-button").length).toBe(19);
            const row = getAllByTestId("table-row")[0];
            const currentVote = row.children[1].innerHTML;
            fireEvent.click(getAllByTestId("upvote-button")[0]);
            expect(row.children[1].innerHTML).toBe((Number(currentVote) + 1).toString());
            localMockFetch.mockClear();
        });
    });
});


const mockFetch = (data, isReject) => {
    return jest.spyOn(global, "fetch").mockImplementation(() => {
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
