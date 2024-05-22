import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `You are a helpful assistant. You can help me by answering my questions. You can also ask me questions. Respond using markdown and LaTeX with the following math delimiters, for example:

Latex (inline): $ \\lambda_{n} $

Latex (block):
$$
A = \\pi r^2
$$`;

export const modelOptions: ModelOptions[] = [
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-16k',
  'gpt-4',
  'gpt-4-32k',
  'gpt-4-turbo-preview',
  'gpt-4-o',
  'claude-3-opus',
  'command-r-plus',
  'mistral-medium',
  'mistral-large',
  'gemini-pro',
  'glm-4',
  'abab6.5-chat',
  'moonshot-v1-128k',
  'ERNIE-Bot-4',
  'SparkDesk',
  'SenseChat-5',
  'qwen1.5-110b-chat',
  'Baichuan4',
  // 'gpt-3.5-turbo-0301',
  // 'gpt-4-0314',
  // 'gpt-4-32k-0314',
];

export const defaultModel = 'gpt-3.5-turbo';

export const modelMaxToken = {
  'gpt-3.5-turbo': 4096,
  'gpt-3.5-turbo-16k': 16384,
  'gpt-4': 8192,
  'gpt-4-32k': 32768,
  'gpt-4-turbo-preview': 128000,
  'claude-3-opus': 200000,
  'command-r-plus': 12800,
  'mistral-medium': 32000,
  'mistral-large': 32000,
  'gemini-pro': 12800,
  'glm-4': 8000,
  'abab6.5-chat': 8000,
  'moonshot-v1-128k': 12800,
  'ERNIE-Bot-4': 8000,
  'SparkDesk': 8000,
  'SenseChat-5': 128000,
  'qwen1.5-110b-chat': 32000,
};

export const modelCost = {
  'gpt-3.5-turbo': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'gpt-3.5-turbo-16k': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.004, unit: 1000 },
  },
  'gpt-4': {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'gpt-4-32k': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'gpt-4-turbo-preview': {
    prompt: { price: 0.01, unit: 1000 },
    completion: { price: 0.03, unit: 1000 },
  },
  'gpt-4o': {
    prompt: { price: 0.005, unit: 1000 },
    completion: { price: 0.015, unit: 1000 },
  },
  'claude-3-opus': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.30, unit: 1000 },
  },
  'command-r-plus': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.015, unit: 1000 },
  },
  'mistral-medium': {
    prompt: { price: 0.0027, unit: 1000 },
    completion: { price: 0.0081, unit: 1000 },
  },
  'mistral-large': {
    prompt: { price: 0.008, unit: 1000 },
    completion: { price: 0.024, unit: 1000 },
  },
  'gemini-pro': {
    prompt: { price: 0, unit: 1000 },
    completion: { price: 0, unit: 1000 },
  },
  'glm-4': {
    prompt: { price: 0.014, unit: 1000 },
    completion: { price: 0.014, unit: 1000 },
  },
  'abab6.5-chat': {
    prompt: { price: 0.0042, unit: 1000 },
    completion: { price: 0.0042, unit: 1000 },
  },
  'moonshot-v1-128k': {
    prompt: { price: 0.0084, unit: 1000 },
    completion: { price: 0.0084, unit: 1000 },
  },
  'ERNIE-Bot-4': {
    prompt: { price: 0.021, unit: 1000 },
    completion: { price: 0.042, unit: 1000 },
  },
  'SparkDesk': {
    prompt: { price: 0, unit: 1000 },
    completion: { price: 0, unit: 1000 },
  },
  'SenseChat-5': {
    prompt: { price: 0.014, unit: 1000 },
    completion: { price: 0.014, unit: 1000 },
  },
  'qwen1.5-110b-chat': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.003, unit: 1000 },
  },
  'Baichuan4': {
    prompt: { price: 0.014, unit: 1000 },
    completion: { price: 0.014, unit: 1000 },
  },
};

export const defaultUserMaxToken = 4000;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
