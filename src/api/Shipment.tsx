import { ShippmentData } from "@/components/shippment/ShippmentForm";
import { Shippment, UpadateShippment, User } from "@/types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateShippment = () => {
  const queryClient = useQueryClient();
  const accessToken = "";
  const createShippmentRequest = async (data: ShippmentData) => {
    const response = await fetch(`${API_BASE_URL}/api/shippments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error creating Shippment");
    }
    return response.json();
  };

  const {
    mutateAsync: createShippment,
    isLoading,
    error,
    isSuccess,
  } = useMutation(createShippmentRequest, {
    onSuccess: () => {
      toast.success("Shippment created successfully");
      queryClient.invalidateQueries("shippments");
    },
  });
  if (error) {
    toast.error(error.toString());
  }
  return { createShippment, isLoading, isSuccess };
};

export const useGetShippments = () => {
  const accessToken = "";
  const getShippmentRequest = async (): Promise<Shippment[]> => {
    const response = await fetch(`${API_BASE_URL}/api/shippments`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error fetching Shippment");
    }
    return response.json();
  };

  const {
    data: shippments,
    isLoading,
    error,
  } = useQuery(["shippments"], getShippmentRequest);
  if (error) {
    toast.error(error.toString());
  }
  return { shippments, isLoading };
};

export const useGetSingleShippment = (id: string) => {
  const accessToken = "";
  const getShippmentRequest = async () => {
    const response = await fetch(`${API_BASE_URL}/api/shippments/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error fetching Shippment");
    }
    return response.json();
  };

  const {
    data: shippment,
    isLoading,
    error,
  } = useQuery(["shippments", id], getShippmentRequest);
  if (error) {
    toast.error(error.toString());
  }
  return { shippment, isLoading };
};

export const useGetTrackShippment = (trackingId: string) => {
  const accessToken = "";
  const getTrackShippmentRequest = async (): Promise<Shippment> => {
    const response = await fetch(
      `${API_BASE_URL}/api/shippments/${trackingId}/track`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error fetching Shippment");
    }
    return response.json();
  };

  const {
    data: shippment,
    isLoading,
    error,
  } = useQuery(["shippments", trackingId], getTrackShippmentRequest, {
    refetchInterval: 500,
  });
  if (error) {
    toast.error("Package with given Id not found");
  }
  return { shippment, isLoading };
};

export const useDeleteShippment = () => {
  const queryClient = useQueryClient();
  const accessToken = "";
  const deleteShippmentRequest = async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/api/shippments/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error deleting Shippment");
    }
    return response.json();
  };

  const {
    mutateAsync: deleteShippment,
    isLoading,
    error,
  } = useMutation(deleteShippmentRequest, {
    onSuccess: () => {
      toast.success("Shippment deleted successfully");
      queryClient.invalidateQueries("shippments");
    },
  });
  if (error) {
    toast.error(error.toString());
  }

  return { deleteShippment, isLoading };
};

type UpdateShippmentStatusData = {
  id: string;
  status: string;
};

export const useUpdateShippmentStatus = () => {
  const queryClient = useQueryClient();
  const accessToken = "";
  const updateShippmentStatusRequest = async (
    UpdateShippmentStatusDataRequest: UpdateShippmentStatusData
  ) => {
    const response = await fetch(
      `${API_BASE_URL}/api/shippments/${UpdateShippmentStatusDataRequest.id}/status`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: UpdateShippmentStatusDataRequest.status,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Error updating Shippment");
    }
    return response.json();
  };

  const {
    mutateAsync: updateShippmentStatus,
    isLoading,
    error,
  } = useMutation(updateShippmentStatusRequest, {
    onSuccess: () => {
      toast.success("Shippment created successfully");
      queryClient.invalidateQueries("shippments");
    },
  });
  if (error) {
    toast.error(error.toString());
  }
  return { updateShippmentStatus, isLoading };
};

type UpdateData = {
  id: string;
  data: UpadateShippment;
};

export const useUpdateShippment = () => {
  const accessToken = "";

  const updateShippmentRequest = async (
    UpdateData: UpdateData
  ): Promise<Shippment> => {
    const response = await fetch(
      `${API_BASE_URL}/api/shippments/${UpdateData.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UpdateData.data),
      }
    );
    if (!response.ok) {
      throw new Error("Error updating Shippment");
    }
    return response.json();
  };

  const {
    mutateAsync: updateShippment,
    isLoading,
    error,
    reset,
  } = useMutation(updateShippmentRequest, {
    onSuccess: () => {
      toast.success("Shippment status updated successfully");
    },
  });
  if (error) {
    toast.error(error.toString());
    reset();
  }

  return { updateShippment, isLoading };
};

type UserForm = {
  email: string;
  password: string;
};
export const useUserLogin = () => {
  const loginUserRequest = async (userData: UserForm): Promise<User> => {
    const response = await fetch(`${API_BASE_URL}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error("Failed to authenticate user");
    }
    // console.log("Response : ",response.json())
    return response.json();
  };

  const {
    mutateAsync: loginUser,
    isLoading,
    isError,
  } = useMutation("user", loginUserRequest);
  if (isError) {
    toast.error("Authentication failed");
  }
  return { loginUser, isLoading };
};

export const useUserCreate = () => {
  const createUserRequest = async (userData: UserForm): Promise<User> => {
    const response = await fetch(`${API_BASE_URL}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error("Failed to authenticate user");
    }
    return response.json();
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
  } = useMutation("user", createUserRequest);
  if (isError) {
    toast.error("Registration failed");
  }
  return { createUser, isLoading };
};
