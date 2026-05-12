import javax.swing.*;
import java.awt.*;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class RelogioFuncional extends JFrame {

    private JLabel labelHora;

    public RelogioFuncional() {
        // Configurações da Janela
        setTitle("Meu Relógio Java");
        setSize(300, 150);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null); // Centraliza na tela
        setLayout(new GridBagLayout()); // Centraliza o conteúdo
        getContentPane().setBackground(new Color(33, 33, 33)); // Fundo escuro

        // Estilização do Texto
        labelHora = new JLabel();
        labelHora.setFont(new Font("Arial", Font.BOLD, 40));
        labelHora.setForeground(Color.CYAN); // Cor do texto
        add(labelHora);

        // Inicia a atualização
        atualizarHora();
        
        // Timer que executa a cada 1000ms (1 segundo)
        Timer timer = new Timer(1000, e -> atualizarHora());
        timer.start();
    }

    private void atualizarHora() {
        LocalTime agora = LocalTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("HH:mm:ss");
        labelHora.setText(agora.format(formato));
    }

    public static void main(String[] args) {
        // Roda a interface gráfica na thread correta do Swing
        SwingUtilities.invokeLater(() -> {
            new RelogioFuncional().setVisible(true);
        });
    }
}

