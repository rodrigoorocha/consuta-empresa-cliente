import { useState } from 'react';
import { TextInput, PasswordInput, Paper, Title, Container, Button, Group, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Login() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'E-mail inválido'),
      password: (value) => (value.length >= 6 ? null : 'A senha deve ter pelo menos 6 caracteres'),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);

    // Simulação de autenticação
    setTimeout(() => {
      alert(`Login com:\nEmail: ${values.email}\nSenha: ${values.password}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <Container size={420} my={40}>
      <Title align="center">Bem-vindo de volta!</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="E-mail"
              placeholder="seuemail@exemplo.com"
              {...form.getInputProps('email')}
              required
            />

            <PasswordInput
              label="Senha"
              placeholder="sua senha"
              {...form.getInputProps('password')}
              required
            />
          </Stack>

          <Group position="apart" mt="xl">
            <Button type="submit" loading={loading} fullWidth>
              Entrar
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}