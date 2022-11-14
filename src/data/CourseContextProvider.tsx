import React, { useState } from "react";

import CoursesContext, { Course, Goal } from "./courses-context";

const CoursesContextProvider: React.FC<any> = (props) => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "c1",
      title: "React - The Complete Guide",
      encrolled: new Date(),
      goals: [],
      included: false,
    },
  ]);
  const addCourse = (title: string, date: Date) => {
    const newCourse: Course = {
      id: Math.random().toString(),
      title,
      encrolled: date,
      goals: [],
      included: false,
    };
    setCourses((curCourses) => {
      return curCourses.concat(newCourse);
    });
  };

  const addGoal = (courseId: string, text: string) => {
    const newGoal: Goal = {
      id: Math.random().toString(),
      text,
    };
    setCourses((curCourses) => {
      const updatedCourses = [...curCourses];
      const updateCourseIndex = updatedCourses.findIndex(
        (c) => c.id === courseId
      );
      const updatedCourseGoals =
        updatedCourses[updateCourseIndex].goals.concat(newGoal);
      const updateCourse = { ...updatedCourses[updateCourseIndex] };
      updateCourse.goals = updatedCourseGoals;
      updatedCourses[updateCourseIndex] = updateCourse;
      return updatedCourses;
    });
  };

  const deleteGoal = (courseId: string, goalId: string) => {
    setCourses((curCourses) => {
      const updatedCourses = [...curCourses];
      const updateCourseIndex = updatedCourses.findIndex(
        (c) => c.id === courseId
      );
      const updatedCourseGoals = updatedCourses[updateCourseIndex].goals.filter(
        (g) => g.id !== goalId
      );
      const updateCourse = { ...updatedCourses[updateCourseIndex] };
      updateCourse.goals = updatedCourseGoals;
      updatedCourses[updateCourseIndex] = updateCourse;
      return updatedCourses;
    });
  };

  const updateGoal = (courseId: string, goalId: string, newText: string) => {
    setCourses((curCourses) => {
      const updatedCourses = [...curCourses];
      const updateCourseIndex = updatedCourses.findIndex(
        (c) => c.id === courseId
      );
      const updatedCourseGoals =
        updatedCourses[updateCourseIndex].goals.slice();
      const updatedCourseGoalIndex = updatedCourseGoals.findIndex(
        (g) => g.id === goalId
      );
      const updatedGoal = {
        ...updatedCourseGoals[updatedCourseGoalIndex],
        text: newText,
      };
      updatedCourseGoals[updatedCourseGoalIndex] = updatedGoal;
      const updateCourse = { ...updatedCourses[updateCourseIndex] };
      updateCourse.goals = updatedCourseGoals;
      updatedCourses[updateCourseIndex] = updateCourse;
      return updatedCourses;
    });
  };

  const changeCourseFilter = (courseId: string, isIncluded: boolean) => {
    setCourses((curCourses) => {
      const updatedCourses = [...curCourses];
      const updateCourseIndex = updatedCourses.findIndex(
        (c) => c.id === courseId
      );

      const updateCourse = {
        ...updatedCourses[updateCourseIndex],
        included: isIncluded,
      };
      updatedCourses[updateCourseIndex] = updateCourse;
      return updatedCourses;
    });
  };

  return (
    <CoursesContext.Provider
      value={{
        courses,
        addCourse,
        addGoal,
        deleteGoal,
        updateGoal,
        changeCourseFilter,
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
