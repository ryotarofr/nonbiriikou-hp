import Image from "next/image"

export default function FacilitiesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mx-4 sm:mx-0  py-4">
        <div className="text-xl font-semibold">施設案内</div>
        <div className="text-gray-500 font-light">Facilities Instoduction</div>
      </div>
      <div className="mx-10 mb-10 space-y-6 md:space-y-0 grid md:grid-cols-2 md:gap-14">
        {facilities.map((facility, index) => (
          <div key={index} className=" py-4">
            <div className='text-center text-xl md:text-2xl lg:text-3xl italic font-semibold border-b mb-2'>
              {facility.facilityName}
            </div>
            <Image src={facility.facilityImage} alt="sample" width={2000} height={1500} className="w-full h-full object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )

}

const facilities = [
  {
    facilityImage: "/image/landing/IMG_1182.JPG",
    facilityName: "玄関",
  },
  {
    facilityImage: "/image/landing/IMG_1179.JPG",
    facilityName: "相談室",
  },
  {
    facilityImage: "/image/landing/IMG_1180.JPG",
    facilityName: "応接室",
  },
  {
    facilityImage: "/image/landing/IMG_1167.JPG",
    facilityName: "作業室",
  },
  {
    facilityImage: "/image/landing/IMG_1164.JPG",
    facilityName: "作業室",
  },
  {
    facilityImage: "/image/landing/IMG_1184.JPG",
    facilityName: "食堂",
  },
  {
    facilityImage: "/image/landing/IMG_1173.JPG",
    facilityName: "洗面所",
  },
  {
    facilityImage: "/image/landing/IMG_1200.JPG",
    facilityName: "事務所",
  },
  {
    facilityImage: "/image/landing/IMG_1228.JPG",
    facilityName: "2階からの風景",
  },
]