/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { title } from "../../../maritim.jsx"

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
    width: "83%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  card: {
    marginTop: "50px",
    marginBottom: "80px",
  },
  cardWrapper: {
    width: "100%",
    position: "relative",
    minHeight: "1px",
    paddingLeft: "25px",
    paddingRight: "25px",
    textAlign: "left",
    justifyContent: "center",
    alignSelf: "center",
  },
  cardImage: {
    width: "100%",
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px",
    pointerEvents: "none",
    maxWidth: "300px",
  },
  cardCategoryWrapper: {
    color: "#00acc1",
    display: "inline-block",
  },
  cardCategory: {
    marginTop: "10px",
    marginBottom: 0,
  },
  cardTitle: {
    color: "#3C4858",
    marginTop: "0.625rem",
    minHeight: "auto",
    fontFamily: '"Roboto Slab", "Times New Roman", serif',
    fontWeight: 700,
    marginBottom: "0.75rem",
    textDecoration: "none",
  },
  cardDescription: {
    color: "#999",
    lineHeight: "1.313rem",
  },
  cardAuthor: {
    fontSize: "14px",
    margin: "0 0 10px",
    color: "#3c4858",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
  },
}

export default productStyle