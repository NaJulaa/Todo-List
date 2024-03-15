package com.DesafioNucleo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CadastroController {

     @Autowired
    private JdbcTemplate jdbcTemplate;

        
        public String index(Model model) {
        List<Map<String, Object>> results = jdbcTemplate.queryForList("SELECT * FROM cadastro");

        model.addAttribute("results", results);
        return "TelaCadastro";

    }

    @PostMapping("/seu-endpoint")
    public String lidarComBotao() {
        // Lógica para lidar com o clique do botão
        // Por exemplo, redirecionar para outra página ou retornar uma mensagem JSON
        return "pagina-resposta";
    }
}
 

