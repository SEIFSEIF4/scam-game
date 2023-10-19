import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import { siteConfig } from "../../config/site";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const router = useRouter();

    const { direction } = req.body;

    const currentPage = siteConfig.navItems.find(
        (item) => item.href === router.pathname
    );

    if (currentPage) {
        if (direction === "up") {
            // const nextPageIndex = siteConfig.navItems.indexOf(currentPage) + 1;
            // if (nextPageIndex < siteConfig.navItems.length) {
            //     const nextPage = siteConfig.navItems[nextPageIndex];
            //     router.push(nextPage.href);
            // }
            console.log("swipe up");
        }

        if (direction === "down") {
            // const previousPageIndex =
            //     siteConfig.navItems.indexOf(currentPage) - 1;
            // if (previousPageIndex >= 0) {
            //     const previousPage = siteConfig.navItems[previousPageIndex];
            //     router.push(previousPage.href);
            // }
            console.log("swipe down");
        }
    }

    res.status(200).json({ message: "Swipe gesture processed" });
};
