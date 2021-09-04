import kotlin.math.sin
import kotlin.random.Random
import kotlinx.browser.*
import org.w3c.dom.*

var pontosJ = 0
var pontosC = 0

@JsName("pedra")
fun pedra(){
    val partida = document.getElementById("partida")
    val pontos = document.getElementById("pontos")
    val vencedor = document.getElementById("vencedor")
    if (partida==null) {
        println("Erro")
        return;
    }
    if(vencedor==null){
        return;
    }
    val computador = Random.nextInt(1, 4)
    if(computador == 1){
        partida.innerHTML = "Pedra vs Pedra"
        vencedor.innerHTML="Empate"
    }
    if(computador == 2){
        partida.innerHTML = "Pedra vs Papel"
        pontosC++
         vencedor.innerHTML="Computador Ganhou"
    }
    if(computador == 3){
        partida.innerHTML = "Pedra vs Tesoura"
        pontosJ++
        vencedor.innerHTML="Jogador Ganhou"
    }
    if (pontos!=null) 
           pontos.innerHTML = ("Jogador:$pontosJ Computador:$pontosC<br>")
}
@JsName("papel")
fun papel(){
    val partida = document.getElementById("partida")
    val pontos = document.getElementById("pontos")
    val vencedor = document.getElementById("vencedor")
    if (partida==null) {
        println("Erro")
        return;
    }
    if(vencedor==null){
        return;
    }
    val computador = Random.nextInt(1, 4)
    if(computador == 1){
        partida.innerHTML = "Papel vs Pedra"
        pontosJ++
        vencedor.innerHTML="Jogador Ganhou"
    }
    if(computador == 2){
        partida.innerHTML = "Papel vs Papel"
        vencedor.innerHTML="Empate"
    }
    if(computador == 3){
        partida.innerHTML = "Papel vs Tesoura"
        pontosC++
        vencedor.innerHTML="Computador Ganhou"
    }
    if (pontos!=null) 
           pontos.innerHTML = ("Jogador:$pontosJ Computador:$pontosC<br>")
}
@JsName("tesoura")
fun tesoura(){
    val partida = document.getElementById("partida")
    val pontos = document.getElementById("pontos")
    val vencedor = document.getElementById("vencedor")
    if (partida==null) {
        println("Erro")
        return;
    }
    if(vencedor==null){
        return;
    }
    val computador = Random.nextInt(1, 4)
    if(computador == 1){
        partida.innerHTML = "Tesoura vs Pedra"
        pontosC++
        vencedor.innerHTML="Computador Ganhou"
    }
    if(computador == 2){
        partida.innerHTML = "Tesoura vs Papel"
        pontosJ++
        vencedor.innerHTML="Jogador Ganhou"
    }
    if(computador == 3){
        partida.innerHTML = "Tesoura vs Tesoura"
        vencedor.innerHTML="Empate"
    }
    if (pontos!=null) 
           pontos.innerHTML = ("Jogador:$pontosJ Computador:$pontosC<br>")
}
