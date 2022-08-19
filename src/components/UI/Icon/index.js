import React from "react"

export default ({ name }) => {

    const style = {
        mask: `images/icon-${name}.svg`,
        maskSize: "cover"
    }
    // console.log(importSVG(name))
    return (
        <div className="icon-wrapper">
            {/* <SVGImport /> */}
            <img src={`/images/icon-${name}.svg`} alt="icon" />
        </div>
    )
}