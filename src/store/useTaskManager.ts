import { Task } from '@/types/types';
import { create } from 'zustand'

type TaskManagerState = {
  tasks: Task[];
  searchTask: string;
  addTask: (task: Task) => void;
  updateTask: (taskId: number, updatedTask: Task) => void;
  deleteTask: (taskId: number) => void;
  setSearchTask: (searchQuery: string) => void;
};

const useTaskManager = create<TaskManagerState>((set) => ({
  tasks: [],
  searchTask: "",
  addTask: (task: Task) =>
    set((state: any) => ({ tasks: [...state.tasks, task] })),
  updateTask: (taskId, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === taskId ? { ...task, ...updatedTask } : task)),
    })),
  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
  setSearchTask: (searchQuery) =>
    set(() => ({ searchTask: searchQuery }))
}))

export {
  useTaskManager
}