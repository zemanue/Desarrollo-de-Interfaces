
import java.awt.Dimension;
import javax.swing.JFrame;
import java.awt.Toolkit;

public class SwingJFrameTest {
    public static void main(String[] args) {
        // Creamos un marco
        MiMarco marco1 = new MiMarco();

    }
}

class MiMarco extends JFrame {

    // Constructor
    public MiMarco() {
        // Establecemos el tamaño del marco en pixeles
        setSize(500, 400);

        // Establecemos un tamaño relativo equivalente a 3/4 del alto y ancho de la pantalla
        Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
        int width = (int) (screenSize.width * 0.75);
        int height = (int) (screenSize.height * 0.75);
        setSize(width, height);

        // Establecemos la posición del marco con coordenadas
        // setLocation(300, 200);

        // Establecemos la posición centrada en la pantalla
        setLocationRelativeTo(null);

        // Con setBounds() combinaríamos setSize() y setLocation()

        // Mostramos el marco
        setVisible(true);

        // Establecemos el título del marco
        setTitle("Mi marco");

        // Establecemos si el marco se puede redimensionar
        setResizable(true);

        // Establecemos que el marco se maximize en ambas dimensiones al abrirse
        // setExtendedState(Frame.MAXIMIZED_BOTH);

        // Establecemos la operación de cierre al salir de la ventana (el programa deja
        // de ejecutarse)
        setDefaultCloseOperation(MiMarco.EXIT_ON_CLOSE);
    }

    // Constructor para definir ancho y altura
    public MiMarco(int width, int height) {
        // Llama al constructor MiMarco()
        this();
        // Redimensionamos la ventana de acuerdo con el ancho y alto proporcionados
        setSize(width, height);
    }
}