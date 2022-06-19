<template>
  <div>
    <ToolBar/>
    <!-- v-if si son un cliente solo ven la info -->
    <v-container>
      <v-row>
        <v-col>
          <SearchBar/>
        </v-col>
      </v-row>

      <v-row>
        <h1>Qué hay que saber antes de adoptar una mascota</h1>
      </v-row>

      <v-row>
        <h3> Antes de llevar un animal a su hogar:</h3>
        <v-card-text>
          <h3>
            <div>Determine dónde pasará la mayor parte de su tiempo. Debido a que estará bajo mucho estrés con el cambio de entorno, es posible que se olvide de la educación (si la hay) que haya aprendido. A menudo, una cocina funcionará mejor para facilitar la limpieza.
            </div>
            <div>Haga a prueba de perros o gatos el área donde su mascota pasará la mayor parte de su tiempo durante los primeros meses. Esto puede significar pegar cables eléctricos sueltos a los zócalos; almacenar productos químicos domésticos en estantes altos; quitar plantas, alfombras y objetos frágiles; e instalar puertas para bebés.
            </div>
            <div>El entrenamiento de tu perro comenzará en el primer momento que lo tengas. Tómese el tiempo para crear una lista de vocabulario que todos usarán cuando le den instrucciones a su perro. Esto ayudará a evitar confusiones y ayudará a tu perro a aprender sus órdenes más rápidamente.
            </div>
            <div>Lleve consigo una chapita de identificación con su número de teléfono cuando recoja a su perro para que tenga una medida adicional de seguridad para el viaje a casa y los primeros días incómodos.
            </div>
          </h3>
        </v-card-text>
      </v-row>
      <v-row>
        <h3>Primer día:</h3>
        <v-card-text>
          <h3>
            <div>Sabemos que mudarse es estresante, ¡y su nueva mascota siente lo mismo! Dale tiempo para que se aclimate a tu hogar y familia antes de presentárselo a extraños.</div>
            <div>Asegúrese de que los niños sepan cómo acercarse al perro sin abrumarlo.</div>
            <div>Cuando recoja a su perro o gato, recuerde consultar como y en que horario fue alimentado. Replique ese programa durante al menos los primeros días para evitar molestias gástricas. Si desea cambiar a una marca de alimento diferente, hágalo durante un período de aproximadamente una semana agregando una parte de comida nueva a tres partes de la anterior durante varios días; luego cambie a comida mitad nueva, mitad vieja y luego una parte vieja por tres partes nueva.</div>
            <div>De camino a casa, su mascota debe estar bien sujeto. Algunos perros o gatos encuentran estresantes los viajes en automóvil, por lo que tenerlo en un lugar seguro hará que el viaje a casa sea más fácil para él y para usted.</div>
            <div>Una vez en casa, llévalo inmediatamente a su zona de aseo y pasa un buen rato con él para que se acostumbre a la zona y haga sus necesidades. Incluso si su perro hace sus necesidades durante este tiempo, esté preparado para los accidentes. Llegar a un nuevo hogar con nuevas personas, nuevos olores y nuevos sonidos puede desviar incluso al perro más domesticado, así que prepárate por si acaso.</div>
            <div>Desde el primer día, su perro necesitará tiempo en familia y breves períodos de confinamiento solitario. No te rindas y consuélalo si se queja cuando se queda solo. En su lugar, préstele atención por su buen comportamiento, como masticar un juguete o descansar tranquilamente.</div>
            <div>En caso de adoptar un cachorro, manténgalo alejado de balcones. Mantenga todos los productos de limpieza, detergentes, y otros productos químicos y medicamentos fuera del alcance del cachorro, preferiblemente en estantes altos.
              Retire las plantas de interior venenosas, o guárdelas donde su cachorro no pueda alcanzarlas.
              Mantenga las tapas de los inodoros cerradas, desenchufe los cables eléctricos y retírelos del piso, y mantenga las bolsas de plástico y las cintas fuera del alcance de su cachorro.</div>
          </h3>
        </v-card-text>
      </v-row>
      <v-row>
        <h3>Para las siguientes semanas:</h3>
        <v-card-text>
          <h3>
            <div>Tu mascota puede sentirse un poco incómodo al principio a medida que te conoce. Sea paciente y comprensivo al mismo tiempo que mantiene el horario que desea mantener para la alimentación, los paseos, etc. Este horario le mostrará a su perro lo que se espera de él y lo que él puede esperar de usted.</div>
            <div>Encuentre a un veterinario de confianza y tenga las vacunas de su mascota al dia, asi tambien antiparasitarios internos y externos. Realice chequeos regulares, con mayor frecuencia si adopto un cachorro</div>
            <div>Si encuentra problemas de comportamiento con los que no está familiarizado, pídale a su veterinario que le recomiende un entrenador. </div>
          </h3>
        </v-card-text>
      </v-row>
      <v-row>
        <h3>Para más información puede consultar estos links:</h3>
<!--        COMENTARIO: agregar links, ya me canse :)-->
      </v-row>
      <v-row>
        <h3>O ver estos videos informativos:</h3>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
import SearchBar from "@/components/SearchBar";

export default {
  name: "InfoMascotaView",
  components: {SearchBar, ToolBar},

  data () {
    return {

    }
  },
}
</script>

<style scoped>

</style>