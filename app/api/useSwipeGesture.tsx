// useSwipeGesture.ts
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useSwipeGesture() {
    const router = useRouter();

    useEffect(() => {
        let startY = 0;
        let endY = 0;

        document.addEventListener("touchstart", (e) => {
            startY = e.touches[0].clientY;
        });

        document.addEventListener("touchend", (e) => {
            endY = e.changedTouches[0].clientY;

            // Determine the swipe direction
            const deltaY = startY - endY;
            if (deltaY > 50) {
                // Swipe up, navigate to a different page
                fetch("/api/swipe", {
                    method: "POST",
                    body: JSON.stringify({ direction: "up" }),
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error("Network response was not ok");
                        }
                    })
                    .then((data) => {
                        // Handle the response if needed
                        router.push("/order"); // Navigate to the desired page
                    })
                    .catch((error) => {
                        console.error("Error processing swipe:", error);
                    });
            }
        });
    }, [router]);
}
