import React from "react";
import { customRender } from "../../../utility/test-utils";
import {UpVoteButton,HideButton} from "../index";


describe('Button',()=>{
    it("render  hide button", () => {
        const { getByTestId  } = customRender(<HideButton objectID={"123"} />);
        const elm = getByTestId("hide-button");
        expect(elm).toBeInTheDocument();
    });
    it("renders  upvote button", () => {
        const { getByTestId  } = customRender(<UpVoteButton objectID={"123"} />);
        expect(getByTestId("upvote-button")).toBeInTheDocument();
    });
});

