import toycollect1 from "../assets/projects/web_do_choi/image-01.png";
import toycollect2 from "../assets/projects/web_do_choi/image-02.png";
import toycollect3 from "../assets/projects/web_do_choi/image-03.png";
import toycollect4 from "../assets/projects/web_do_choi/image-04.png";
import toycollect5 from "../assets/projects/web_do_choi/image-05.png";
import toycollect6 from "../assets/projects/web_do_choi/image-06.png";
import toycollect7 from "../assets/projects/web_do_choi/image-07.png";
import toycollect8 from "../assets/projects/web_do_choi/image-08.png";
import toycollect9 from "../assets/projects/web_do_choi/image-09.png";
import toycollect10 from "../assets/projects/web_do_choi/image-10.png";
import toycollect11 from "../assets/projects/web_do_choi/image-11.png";
import toycollect12 from "../assets/projects/web_do_choi/image-12.png";
import toycollect13 from "../assets/projects/web_do_choi/image-13.png";
import toycollect14 from "../assets/projects/web_do_choi/image-14.png";
import toycollect15 from "../assets/projects/web_do_choi/image-15.png";
import rice_predict_01 from "../assets/projects/rice_predict/image-01.png";
import rice_predict_02 from "../assets/projects/rice_predict/image-02.png";
import rice_predict_03 from "../assets/projects/rice_predict/image-03.png";
import rice_predict_04 from "../assets/projects/rice_predict/image-04.png";
import rice_predict_05 from "../assets/projects/rice_predict/image-05.png";
import pharmacy_03 from "../assets/projects/phamercy/image-03.png";
import pharmacy_05 from "../assets/projects/phamercy/image-05.png";
import pharmacy_06 from "../assets/projects/phamercy/image-06.png";
import pharmacy_07 from "../assets/projects/phamercy/image-07.png";
import pharmacy_08 from "../assets/projects/phamercy/image-08.png";
import pharmacy_09 from "../assets/projects/phamercy/image-09.png";
import pharmacy_10 from "../assets/projects/phamercy/image-10.png";
import pharmacy_11 from "../assets/projects/phamercy/image-11.png";

export interface Project {
  title: string;
  position: string;
  feature: string;
  technology: string;
  link: string;
  date: string;
  description: string;
  images: string[];
}

export const projects: Project[] = [
  {
    title: "[WEBSITE] HỆ THỐNG ĐẶT LỊCH KHÁM BỆNH",
    position: "Fullstack Developer",
    feature: "Website dịch vụ, có trang quản lý và có tích hợp mô hình học sâu dự đoán bệnh thông qua ảnh x-quang.",
    technology: "String Boot, React Typescript, React Native, FastAPI, MySQL",
    link: "https://github.com/TriKhai/hospital_system",
    date: "7/2023",
    description:
      "Phát triển hệ thống đặt lịch khám bệnh, vận hành backend bằng String Boot và MySQL. Thiết kế và triển khai RESTful API, có kiểm thử bằng Postman. Giao diện được xây dựng trên hai nền tảng Website (React TypeScript) và Mobile App (React Native). Dự án có tích hợp  xử lý trí tuệ nhân tạo bằng FastAPI, ứng dụng mô hình học sâu (Deep Learning) để phân tích ảnh X-quang và dự đoán bệnh viêm phổi",
    images: [],
  },
  {
    title: "[WEBSITE] LƯU TRỮ ẢNH MÃ HÓA",
    position: "Fullstack Developer",
    feature: "Lưu trữ hình ảnh đã mã hoá lên đám mây.",
    technology: "FastAPI, React Typescript, Cloudinary",
    link: "https://github.com/TriKhai/secure-image-cloud",
    date: "7/2023",
    description:
      "Ứng dụng kết hợp thuật toán chuẩn AES với lý thuyết hỗn loạn (Chaos Theory) sử dụng ánh xạ Henon Map và phép toán XOR để tối đa hóa độ an toàn cho dữ liệu hình ảnh. Hệ thống bao gồm Frontend hiện đại viết bằng React TypeScript, Backend FastAPI hiệu năng cao để xử lý các thuật toán toán học phức tạp, sử dụng SQLite quản lý metadata và tích hợp Cloudinary để lưu trữ dữ liệu đã mã hóa trên đám mây.",
    images: [],
  },
  {
    title: "TRÌNH SOẠN THẢO VĂN BẢN, TÌM KIẾM BẰNG BIỂU THƯC CHỈNH QUY",
    position: "Fullstack Developer",
    feature: "Trình soạn thảo văn bản và cho phép tìm kiếm bằng biểu thức chính quy.",
    technology: "PyQt",
    link: "",
    date: "7/2023",
    description:
      "Phát triển trình soạn thảo văn bản nâng cao (PyQt), tích hợp công cụ xử lý chuỗi mạnh mẽ dựa trên Biểu thức chính quy (Regex).",
    images: [],
  },
  {
    title: "GỢI Ý HASHTAG TỪ NỘI DUNG BÀI VIẾT",
    position: "AI Engineer",
    feature: "Từ nội dung văn bản, đề xuất các hashtag tương ứng.",
    technology: "Python",
    link: "",
    date: "7/2023",
    description:
      "Sử dụng các mô hình học sâu để huấn luyện mô hình dựa trên tập dữ liệu. Đưa ra các hashtag tương ứng với nội dung. ",
    images: [],
  },
  {
    title: "[WEBSITE] HỆ THỐNG QUẢN LÝ NHÀ THUỐC",
    position: "Fullstack Developer",
    feature:
      "Thống kê thuốc, quản lý thuốc và các phần liên quan. Cảnh báo thuốc hết hạn. Tạo hoá đơn, xuất file, cảnh báo hoá đơn bất thường.",
    technology: "Django, React TS, MySQL",
    link: "https://github.com/TriKhai/pharmacy_system",
    date: "7/2023",
    description:
      "Sử dụng các công nghệ phổ biến tạo website quản lý nhà thuốc với giao diện thân thiện và tính năng đa dạng.",
    images: [
      pharmacy_03,
      pharmacy_05,
      pharmacy_06,
      pharmacy_07,
      pharmacy_08,
      pharmacy_09,
      pharmacy_10,
      pharmacy_11,
    ],
  },
  {
    title: "[WEBSITE] PHÂN LOẠI GẠO CAMMEO & OSMANCIK",
    position: "Fullstack Developer",
    feature:
      "Dự đoán dựa trên các thông số của hạt gạo, tích hợp nhiều mô hình và có diễn giải kết quả.",
    technology: "React TS, Flask",
    link: "https://rice-predict.vercel.app/",
    date: "7/2023",
    description:
      "Sử dụng các giải thuật máy học (K-Nearest Neighbors, Naive Bayes, Decision Trees, Random Forest, Support Vector Machine, Logistic regression, Multi-layer Perceptron, AdaBoost), thực hiện tích hợp vào website",
    images: [
      rice_predict_01,
      rice_predict_02,
      rice_predict_03,
      rice_predict_04,
      rice_predict_05,
    ],
  },
  {
    title: "[WEBSITE] QUẢN LÝ BÁN HÀNG (ĐỒ CHƠI)",
    position: "Fullstack Developer",
    feature:
      "Đăng nhập, đăng ký, phân quyền, danh mục sản phẩm, mượn sản phẩm, quản lý, quên mật khẩu (email),...",
    technology: "Spring Boot (Java), MySQL, React, Typescript, TailwindCSS,...",
    link: "https://github.com/TriKhai/toycollect",
    date: "3/2024",
    description: "Xây dựng hệ thống quản lý bán đồ chơi",
    images: [
      toycollect1,
      toycollect2,
      toycollect3,
      toycollect4,
      toycollect5,
      toycollect6,
      toycollect7,
      toycollect8,
      toycollect9,
      toycollect10,
      toycollect11,
      toycollect12,
      toycollect13,
      toycollect14,
      toycollect15,
    ],
  },
  {
    title: "[WEBSITE] QUẢN LÝ THƯ VIỆN",
    position: "Fullstack Developer",
    feature:
      "Đăng nhập, đăng ký, phân quyền, danh mục sách, mượn sách, quản lý thư viện sách,...",
    technology: "NodeJS (Express), Mongodb, VueJS, ...",
    link: "https://github.com/TriKhai/LibraZone/",
    date: "10/2023",
    description: "Xây dựng hệ thống quản lý thư viện sách",
    images: [],
  },
  {
    title: "DỰ ĐOÁN THIÊN THẠCH CÓ KHẢ NĂNG VA CHẠM VỚI TRÁI ĐẤT",
    position: "AI Engineer",
    feature: "Đưa ra dự đoán khả năng thiên thạch có va vào trái đất hay không",
    technology: "Máy học ứng dụng, Python",
    link: "https://astraeus.streamlit.app/",
    date: "10/2023",
    description:
      "Vận dụng kiến thức máy học ứng dụng để xây dựng mô hình AI dự đoán khả năng va chạm của thiên thạch đến với trái đất thông qua các số liệu của thiên thạch.",
    images: [],
  },
  {
    title: "THUẬT TOÁN SIMULATED ANNEALING",
    position: "Developer",
    feature:
      "Tim đường đi cho bài toán TSP bằng giải thuật Simulated Annealing",
    technology: "Python",
    link: "https://github.com/TriKhai/stimul-anneal",
    date: "10/2024",
    description:
      "Áp dụng kiến thức thuật toán Simulated Annealing trong trí tuệ nhân tạo để giải quyết bài toán TSP",
    images: [],
  },
  {
    title: "[WEBSITE] QUẢN LÝ ẨM THỰC MIỀN TÂY",
    position: "Frontend Developer",
    feature:
      "Trang chủ, Trang admin, danh mục sản phẩm, đặt hàng, đăng nhập, đăng ký, ....",
    technology: "HTML, CSS, Bootstrap, JQuery",
    link: "https://github.com/TriKhai/foodweb",
    date: "2023-2024",
    description:
      "Áp dụng kiến thức về website cơ bản, có tích hợp thư viện bootstrap",
    images: [],
  },
];
