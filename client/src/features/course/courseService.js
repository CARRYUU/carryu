import * as api from "../api";
import { toast } from "react-toastify";

const createNewCourse = async (courseData, thunkAPI) => {
  try {
    console.log(courseData);
    const response = await api.createNewCourse(courseData);

    console.log(response?.data);

    if (!response?.data) {
      console.log("No data returned from createNewCourse API call.");

      toast.error("Something went wrong. Please try again later.");

      return;
    }

    toast.success("Course created successfully.");

    // window.location.href = `/course/${response.data._id}/info`;
    window.location.href = "/";

    return response.data;
  } catch (error) {
    console.log(error);
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "createNewCourseError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const updateCourseInfo = async (courseData, thunkAPI) => {
  try {
    const response = await api.updateCourseInfo(courseData);

    if (!response.data) {
      console.log("No data returned from updateCourseInfo API call.");

      toast.error("Something went wrong. Please try again later.");

      return;
    }

    toast.success("Course updated successfully.");

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "updateCourseInfoError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

export const getCourseInfoById = async (id, thunkAPI) => {
  try {
    console.log("Getting course info by id....", id);

    const response = await api.getCourseInfoById(id);

    if (!response.data) {
      console.log("No data returned from getCourseInfoById API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getCourseInfoByIdError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getCourseContentById = async (id, thunkAPI) => {
  try {
    const response = await api.getCourseContentById(id);

    if (!response.data) {
      console.log("No data returned from getCourseContentById API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getCourseContentByIdError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getARandomCourse = async (thunkAPI) => {
  try {
    const response = await api.getARandomCourse();

    if (!response.data) {
      console.log("No data returned from getARandomCourse API call.");

      return;
    }

    toast.success("Rolling!");

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getARandomCourseError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const addCourseComment = async (data, thunkAPI) => {
  try {
    const response = await api.addCourseComment(data._id, {
      comment: data.comment,
    });

    if (!response.data) {
      console.log("No data returned from addCourseComment API call.");

      return;
    }

    toast.success("Comment added successfully.");

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "addCourseCommentError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

export const getCourseAllComments = async (id, thunkAPI) => {
  try {
    const response = await api.getCourseAllComments(id);

    if (!response.data) {
      console.log("No data returned from getCourseAllComments API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getCourseAllCommentsError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

export const addCourseTA = async (taData, thunkAPI) => {
  try {
    const response = await api.addCourseTA(taData);

    if (!response.data) {
      console.log("No data returned from addCourseTA API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "addCourseTAError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const removeCourseTA = async (taData, thunkAPI) => {
  try {
    const response = await api.removeCourseTA(taData);

    if (!response.data) {
      console.log("No data returned from removeCourseTA API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "removeCourseTAError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getCourseTAs = async (id, thunkAPI) => {
  try {
    const response = await api.getCourseTAs(id);

    if (!response.data) {
      console.log("No data returned from getCourseTAs API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getCourseTAsError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const addStudentToCourse = async (data, thunkAPI) => {
  try {
    console.log(data);
    const response = await api.addStudentToCourse(data);

    if (!response.data) {
      console.log("No data returned from addStudentToCourse API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "addStudentToCourseError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const removeStudentFromCourse = async (data, thunkAPI) => {
  try {
    const response = await api.removeStudentFromCourse(data);

    if (!response.data) {
      console.log("No data returned from removeStudentFromCourse API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "removeStudentFromCourseError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getCourseStudents = async (id, thunkAPI) => {
  try {
    const response = await api.getCourseStudents(id);

    if (!response.data) {
      console.log("No data returned from getCourseStudents API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getCourseStudentsError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const courseServices = {
  createNewCourse,
  updateCourseInfo,
  getCourseInfoById,
  getCourseContentById,
  getARandomCourse,
  addCourseComment,
  getCourseAllComments,
  addCourseTA,
  removeCourseTA,
  getCourseTAs,
  addStudentToCourse,
  removeStudentFromCourse,
  getCourseStudents,
};

export default courseServices;
