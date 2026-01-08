type Props = {
  doctorName: string;
  appointmentDate: string;
  appointmentTime: string;
  appointmentType?: string;
  duration?: number;
  price?: number;
};

export default function AppointmentConfirmationEmail({
  doctorName,
  appointmentDate,
  appointmentTime,
  appointmentType,
  duration,
  price,
}: Props) {
  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#f9fafb",
        padding: "24px",
        color: "#111827",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "8px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            marginBottom: "12px",
            fontSize: "20px",
          }}
        >
          ✅ Appointment Confirmed
        </h2>

        <p style={{ marginBottom: "16px", color: "#374151" }}>
          Your appointment has been successfully scheduled. Here are the
          details:
        </p>

        <ul style={{ paddingLeft: "16px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>
            👨‍⚕️ <strong>Doctor:</strong> Dr. {doctorName}
          </li>

          <li style={{ marginBottom: "8px" }}>
            📅 <strong>Date:</strong> {appointmentDate}
          </li>

          <li style={{ marginBottom: "8px" }}>
            ⏰ <strong>Time:</strong> {appointmentTime}
          </li>

          {appointmentType && (
            <li style={{ marginBottom: "8px" }}>
              🦷 <strong>Type:</strong> {appointmentType}
            </li>
          )}

          {duration && (
            <li style={{ marginBottom: "8px" }}>
              ⌛ <strong>Duration:</strong> {duration} minutes
            </li>
          )}

          {price && (
            <li style={{ marginBottom: "8px" }}>
              💰 <strong>Price:</strong> ${price}
            </li>
          )}
        </ul>

        <p style={{ marginBottom: "16px", color: "#374151" }}>
          If you have any questions, please contact our support team.
        </p>

        <p style={{ fontSize: "14px", color: "#6B7280" }}>DentWise Team</p>
      </div>
    </div>
  );
}
