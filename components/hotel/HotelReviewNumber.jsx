import { getReviewsForAHotel } from "@/database/queries"
import Link from "next/link"


export default async function HotelReviewNumber({id}) {
    const reviews = await getReviewsForAHotel(id)
    return (
        <>
            {
                reviews.length === 0 ? (
                    <Link href="#" className="underline">Be the first one to review</Link>
                ) : (
                    <Link href={`/hotel/${id}/reviews`}>{reviews.length} Reviews</Link>
                )
            }
        </>
    )
}
