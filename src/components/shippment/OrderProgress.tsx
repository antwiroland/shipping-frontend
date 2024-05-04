import {
  FaShoppingCart,
  FaShippingFast,
  FaBoxOpen,
  FaCheckCircle,
} from "react-icons/fa";

type Props = {
  value: number;
};

const OrderProgress = ({ value }: Props) => {
  return (
    <div className="relative flex items-center">
      <div className="relative w-full ml-4">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-blue-950 rounded-full"
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <div className="border-2 absolute inset-y-0 flex items-center w-full">
          <FaShoppingCart
            size={24}
            className="text-blue-500 absolute left-0 transform -translate-x-1/2"
          />
          {value >= 25 && (
            <FaShippingFast
              size={24}
              className={`text-${
                value >= 50 ? "blue" : "gray"
              }-500 mr-4 absolute`}
              style={{ left: "25%" }}
            />
          )}
          {value >= 50 && (
            <FaBoxOpen
              size={24}
              className={`text-${
                value >= 75 ? "blue" : "gray"
              }-500 mr-4 absolute`}
              style={{ left: "50%" }}
            />
          )}
          {value >= 75 && (
            <FaCheckCircle
              size={24}
              className={`text-${
                value === 100 ? "blue" : "gray"
              }-500 absolute right-0 transform translate-x-1/2`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderProgress;
