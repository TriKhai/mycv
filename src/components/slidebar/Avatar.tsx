import image from "@assets/image.png";

export default function Avatar() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={image}
        alt="avatar"
        className="rounded-full w-32 h-32 object-cover mb-4 border-4 border-white"
      />
      <h2 className="text-2xl font-semibold text-center">Lý Trí Khải</h2>
      <p className="text-sm text-center mb-6 uppercase italic">Sinh viên CTU</p>
    </div>
  );
}
