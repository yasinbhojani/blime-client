const apiUrl = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export const getYourWorkspaceData = async () => {
  try {
    const response = await fetch(`${apiUrl}/workspace`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching workspace data:", error);
    throw error;
  }
};

export const getGuestWorkspaceData = async () => {
  return [
    {
      workspace_id: "9e725565-b3d2-44f6-b978-4b3cfe2f5e5b",
      workspace_name: "Yasin's Workspace",
      user_id: "c0f94f75-1538-4c40-kj45-962c1f11e20c",
      boards: [
        {
          board_id: "c472407a-d4e3-4f29-980a-b8fbd3622ea7",
          board_name: "Nature",
          background:
            "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          board_id: "697f4119-0c3c-4fc5-b762-8a39c5112ecb",
          board_name: "Shell",
          background: "#7076fe",
        },
      ],
    },
  ];
};
