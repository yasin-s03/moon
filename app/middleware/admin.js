import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()

  if (!authStore.isAuthenticated || authStore.user?.role !== 'admin') {
    return navigateTo('/')
  }
})