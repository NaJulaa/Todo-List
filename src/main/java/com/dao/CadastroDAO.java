package com.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class CadastroDAO {

    public void cadastrarUsuario(String nome, String email, String senha) throws SQLException{
    Connection conexao = new ConexaoPostgreSQL().getConnection();
    String sql = "INSERT INTO cadastro (nome, email,senha) VALUES ('"+nome+"', '"+email+"', '"+senha+"')";
    PreparedStatement statment = conexao.prepareStatement(sql);
    statment.execute();
    conexao.close();
    }


}
