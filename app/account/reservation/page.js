import ReservationCard from "./ReservationCard";

export const metadata = {
  tilte: "预约",
};

export default function Page() {
  // CHANGE
  const bookings = [];

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        您的预约如下：
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          您还没有预约，请关注{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
