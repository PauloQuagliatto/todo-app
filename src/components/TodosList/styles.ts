import { styled } from "../../styles";

export const List = styled("ul", {
    width: "100%",
    listStyleType: "none",
    "li" : {
        width: "100%",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "$bgContrast",
        borderRadius: "8px"
    },
    ":not(:first-child)": {
        marginTop: "0.6rem"
    }
})