resource "null_resource" "docker_network" {
  provisioner "local-exec" {
    command = "docker network create food-app-network || true"
  }
}

output "docker_network" {
  value = "food-app-network"
}